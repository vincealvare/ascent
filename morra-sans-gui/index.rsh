'reach 0.1';

//let's make some enumerations
const [isHand, ZERU, UNU, DUI, TRE, QUATTRU, CINQUE] = makeEnum(6);
const [isGuess, G_ZERU, G_UNU, G_DUI, G_TRE, G_QUATTRU, G_CINQUE, G_SEI, G_SETTE, G_OTTU, G_NOVE, G_DECE] = makeEnum(11);
const [isTotal, T_ZERU, T_UNU, T_DUI, T_TRE, T_QUATTRU, T_CINQUE, T_SEI, T_SETTE, T_OTTU, T_NOVE, T_DECE] = makeEnum(11);
const [isOutcome, A_WINS, DRAW, B_WINS] = makeEnum(3);

//let's find the outcome
const outcome = (handAlice, handBob, guessAlice, guessBob) => {
    if(guessAlice == guessBob) {
        const outcome = DRAW;
        return outcome;
    } else if(guessAlice == (handAlice + handBob)) {
        const outcome = A_WINS;
        return outcome;
    } else if(guessBob == (handAlice + handBob)) {
        const outcome = B_WINS;
        return outcome;
    } else {
        const outcome = DRAW;
        return outcome;
    };
};

//let's make some assertions for the outcome
assert(outcome(UNU, TRE, UNU, TRE) == DRAW); //both get it wrong
assert(outcome(UNU, TRE, QUATTRU, QUATTRU) == DRAW); //both get it right
assert(outcome(UNU, TRE, QUATTRU, TRE) == A_WINS); //alice gets it, bob doesn't
assert(outcome(UNU, TRE, TRE, QUATTRU) == B_WINS); //bob gets it, alice doesn't

forall(UInt, handAlice =>
    forall(UInt, handBob =>
        forall(UInt, guessAlice =>
            forall(UInt, guessBob =>
assert(isOutcome(outcome(handAlice, handBob, guessAlice, guessBob)))))));

forall(UInt, (guess) => 
    forall(UInt, handAlice =>
        forall(UInt, handBob =>
assert(outcome(handAlice, handBob, guess, guess) == DRAW))));

const Player = {
    ...hasRandom,
    throwHand: Fun([], UInt),
    guessTotal: Fun([], UInt),
    seeTotal: Fun([UInt], Null),
    seeOutcome: Fun([UInt], Null),
    seeScoreAlice: Fun([UInt], Null),
    seeScoreBob: Fun([UInt], Null),
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
    //note no commit here
    //loop start
    const totalWager = 2 * wager;
    var winner = DRAW;
    invariant(balance() == totalWager && isOutcome(winner));
    while (winner == DRAW) {
        //commit inside the loop
        commit();

        Alice.only(() => {
            const _handAlice = interact.throwHand();
            const _guessAlice = interact.guessTotal();
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
            const handBob = declassify(interact.throwHand());
            const guessBob = declassify(interact.guessTotal());
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
 
        winner = outcome(handAlice, handBob, guessAlice, guessBob);
        continue;
    }

    assert(winner == A_WINS || winner == B_WINS);
    transfer(totalWager).to(winner == A_WINS ? Alice : Bob);
    commit();

    each([Alice, Bob], () => {
        interact.seeOutcome(winner);
    });

});



