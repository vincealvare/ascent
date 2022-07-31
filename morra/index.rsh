'reach 0.1';

//let's make some enumerations
const [isHand, ZERU, UNU, DUI, TRE, QUATTRU, CINQUE] = makeEnum(6);
const [isGuess, G_ZERU, G_UNU, G_DUI, G_TRE, G_QUATTRU, G_CINQUE, G_SEI, G_SETTE, G_OTTU, G_NOVE, G_DECE] = makeEnum(11);
const [isTotal, T_ZERU, T_UNU, T_DUI, T_TRE, T_QUATTRU, T_CINQUE, T_SEI, T_SETTE, T_OTTU, T_NOVE, T_DECE] = makeEnum(11);
const [isScoreAlice, A_ZERO, A_ONE, A_TWO, A_THREE] = makeEnum(4);
const [isScoreBob, B_ZERO, B_ONE, B_TWO, B_THREE] = makeEnum(4);
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

//these two functions would need to be inside the loop
const scoreAlice = (handAlice, handBob, guessAlice, guessBob) => {
    //const scoreAlice = A_ZERO;
    if(outcome(handAlice, handBob, guessAlice, guessBob) == A_WINS) {
        //scoreAlice++; ??
        const scoreAlice = A_ONE;
        return scoreAlice;
    } else {
        const scoreAlice = A_ZERO;
        return scoreAlice;
    };
};

const scoreBob = (handAlice, handBob, guessAlice, guessBob) => {
    if(outcome(handAlice, handBob, guessAlice, guessBob) == B_WINS) {
        const scoreBob = B_ONE;
        return scoreBob;
    } else {
        const scoreBob = B_ZERO;
        return scoreBob;
    };
};

//While balance is (wager * 2) && (scoreAlice < 3) && (scoreBob < 3), loop it up. Whomstever is first to 3 wins
//While loops happen in the consensus step, so this aint the right spot lol

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

//add some more assertions to verify total scores
// assert(scoreAlice(CINQUE, QUATTRU, G_OTTU, G_OTTU) == A_ZERO); //both get it wrong
// assert(scoreAlice(CINQUE, QUATTRU, G_NOVE, G_NOVE) == A_ZERO); //both get it right
// assert(scoreAlice(CINQUE, QUATTRU, G_NOVE, G_SEI) == A_ONE); //alice gets it, bob doesn't
// assert(scoreAlice(CINQUE, QUATTRU, G_SETTE, G_NOVE) == A_ZERO); //bob gets it, alice doesn't

// assert(scoreBob(ZERU, DUI, G_SETTE, G_TRE) == B_ZERO); //both get it wrong
// assert(scoreBob(ZERU, DUI, G_DUI, G_DUI) == B_ZERO); //both get it right
// assert(scoreBob(ZERU, DUI, G_DECE, G_DUI) == B_ONE); //bob gets it, alice doesn't
// assert(scoreBob(ZERU, DUI, G_DUI, G_QUATTRU) == B_ZERO); //alice gets it, bob doesn't

// forall(UInt, handAlice =>
//     forall(UInt, handBob =>
//         forall(UInt, guessAlice =>
//             forall(UInt, guessBob =>
// assert(isScoreAlice(scoreAlice(handAlice, handBob, guessAlice, guessBob)))))));

// forall(UInt, handAlice =>
//     forall(UInt, handBob =>
//         forall(UInt, guessAlice =>
//             forall(UInt, guessBob =>
// assert(isScoreBob(scoreBob(handAlice, handBob, guessAlice, guessBob)))))));

// forall(UInt, (guess) => 
//     forall(UInt, handAlice =>
//         forall(UInt, handBob =>
// assert(scoreAlice(handAlice, handBob, guess, guess) == A_ZERO))));

// forall(UInt, (guess) => 
//     forall(UInt, handAlice =>
//         forall(UInt, handBob =>
// assert(scoreBob(handAlice, handBob, guess, guess) == B_ZERO))));


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

    // const total = (handAlice, handBob) => {
    //     const total = handAlice + handBob;
    //     return total;
    // }    

    // const winner = outcome(handAlice, handBob, guessAlice, guessBob);
    // const                  [forAlice, forBob] = 
    //     winner == A_WINS ? [       2,      0] :
    //     winner == B_WINS ? [       0,      2] :
    //     /* tie          */ [       1,      1] ;

    // transfer(forAlice * wager).to(Alice);
    // transfer(forBob   * wager).to(Bob);

    

    assert(winner == A_WINS || winner == B_WINS);
    transfer(totalWager).to(winner == A_WINS ? Alice : Bob);
    commit();

    
   
    each([Alice, Bob], () => {
        interact.seeOutcome(winner);
        // interact.seeTotal(total);
        // interact.seeOutcome(outcome(handAlice, handBob, guessAlice, guessBob));
        // interact.seeScoreAlice(scoreAlice(handAlice, handBob, guessAlice, guessBob));
        // interact.seeScoreBob(scoreBob(handAlice, handBob, guessAlice, guessBob));
    });

});



