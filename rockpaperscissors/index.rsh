'reach 0.1';

const [ isHand, ROCK, PAPER, SCISSORS ] = makeEnum(3);
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

const winner = (handAlice, handBob) => 
    ((handAlice + (4 - handBob)) % 3);

//assertions = always true
assert(winner(ROCK, PAPER) == B_WINS);
assert(winner(PAPER, ROCK) == A_WINS);
assert(winner(ROCK, ROCK) == DRAW);

//forall is a computation only referenced inside of assertions
//and allows you to quantify over all possible inputs provided
forall(UInt, handAlice => 
    forall(UInt, handBob =>
        assert(isOutcome(winner(handAlice, handBob)))));

//if hands are same value, always a draw
forall(UInt, (hand) => 
    assert(winner(hand, hand) == DRAW));

//hasRandom provides randomness from the frontend, takes no value & returns UInt
const Player = {
    ...hasRandom,
    getHand: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null)
};

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt, //atomic units
        deadline: UInt //time in blocks (mostly)
    });

    const Bob = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });

    init();

    const informTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout();
        });
    };

    Alice.only(() => {
        const wager = declassify(interact.wager);
        const _handAlice = interact.getHand();
        const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
        const commitAlice = declassify(_commitAlice);
        const deadline = declassify(interact.deadline);
    });
    Alice.publish(wager, commitAlice, deadline).pay(wager);
    commit();

    //stating that bob can't know these values before his local step
    unknowable(Bob, Alice(_handAlice, _saltAlice));
    Bob.only(() => {
        interact.acceptWager(wager);
        const handBob = declassify(interact.getHand());
    }); 
    Bob.publish(handBob)
        .pay(wager)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    //reveals alice's hand
    Alice.only(() => {
        const saltAlice = declassify(_saltAlice);
        const handAlice = declassify(_handAlice);
    });
    Alice.publish(saltAlice, handAlice)
        .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    checkCommitment(commitAlice, saltAlice, handAlice);

    //line 238

    //this is the codification of rps, math is indeed everywhere
    //%3 is mod3, running up or down from zero in {0,1,2} intervals
    //const outcome = (handAlice + (4 - handBob)) % 3; 

    const outcome = winner(handAlice, handBob); //new. uses new winner method
    const              [forAlice, forBob] = 
        outcome == A_WINS ? [       2,      0] :
        outcome == B_WINS ? [       0,      2] :
        /* tie           */ [       1,      1];
    transfer(forAlice * wager).to(Alice);
    transfer(forBob   * wager).to(Bob);
    commit();

    each([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    });

});