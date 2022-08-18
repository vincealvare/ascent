'reach 0.1';

// make some enumerations
const [isHand, ZERU, UNU, DUI, TRE, QUATTRU, CINQUE] = makeEnum(6);
const [isGuess, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN] = makeEnum(11);
const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

// find the outcome
const winner = (handAlice, handBob, guessAlice, guessBob) => {
    if(guessAlice == guessBob) {
        const winner = DRAW;
        return winner;
    } else if(guessAlice == (handAlice + handBob)) {
        const winner = A_WINS;
        return winner;
    } else if(guessBob == (handAlice + handBob)) {
        const winner = B_WINS;
        return winner;
    } else {
        const winner = DRAW;
        return winner;
    };
};

// make some assertions for the outcome
assert(winner(UNU, TRE, UNU, TRE) == DRAW); //both get it wrong
assert(winner(UNU, TRE, QUATTRU, QUATTRU) == DRAW); //both get it right
assert(winner(UNU, TRE, QUATTRU, TRE) == A_WINS); //alice gets it, bob doesn't
assert(winner(UNU, TRE, TRE, QUATTRU) == B_WINS); //bob gets it, alice doesn't

forall(UInt, handAlice =>
    forall(UInt, handBob =>
        forall(UInt, guessAlice =>
            forall(UInt, guessBob =>
assert(isOutcome(winner(handAlice, handBob, guessAlice, guessBob)))))));

forall(UInt, (guess) => 
    forall(UInt, handAlice =>
        forall(UInt, handBob =>
assert(winner(handAlice, handBob, guess, guess) == DRAW))));

const Player = {
    ...hasRandom,
    getHand: Fun([], UInt),
    getGuess: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null)
};

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt,
        deadline: UInt 
    });
    const Bob = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null)
    });

    init();

    const informTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout();
        });
    };

    Alice.only(() => {
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    });
    Alice.publish(wager, deadline).pay(wager);
    commit();

    Bob.only(() => {
        interact.acceptWager(wager);
    });
    Bob.pay(wager)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    //note no commit here due to loop
    const totalWager = 2 * wager;
    //loop start
    var outcome = DRAW;
    invariant(balance() == totalWager && isOutcome(outcome));
    while (outcome == DRAW) {
        //commit inside the loop
        commit();

        Alice.only(() => {
            const _handAlice = interact.getHand();
            const _guessAlice = interact.getGuess();
            const [_commitHandAlice, _saltHandAlice] = makeCommitment(interact, _handAlice);
            const [_commitGuessAlice, _saltGuessAlice] = makeCommitment(interact, _guessAlice);
            const commitHandAlice = declassify(_commitHandAlice);
            const commitGuessAlice = declassify(_commitGuessAlice);
        });
        Alice.publish(commitHandAlice, commitGuessAlice)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        commit();

        unknowable(Bob, Alice(_handAlice, _saltHandAlice));
        unknowable(Bob, Alice(_guessAlice, _saltGuessAlice));
        Bob.only(() => {
            const handBob = declassify(interact.getHand());
            const guessBob = declassify(interact.getGuess());
        });
        Bob.publish(handBob, guessBob)
            .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        commit();

        Alice.only(() => {
            const handAlice = declassify(_handAlice);
            const guessAlice = declassify(_guessAlice);
            const saltHandAlice = declassify(_saltHandAlice);
            const saltGuessAlice = declassify(_saltGuessAlice);
        });
        Alice.publish(handAlice, guessAlice, saltHandAlice, saltGuessAlice)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        checkCommitment(commitHandAlice, saltHandAlice, handAlice);
        checkCommitment(commitGuessAlice, saltGuessAlice, guessAlice);
 
        outcome = winner(handAlice, handBob, guessAlice, guessBob);
        continue;
    }

    assert(outcome == A_WINS || outcome == B_WINS);
    transfer(totalWager).to(outcome == A_WINS ? Alice : Bob);
    commit();

    each([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    });

});



