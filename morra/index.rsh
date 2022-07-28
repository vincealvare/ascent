'reach 0.1';

//let's make some enumerations
const [isHand, ZERU, UNU, DUI, TRE, QUATTRU, CINQUE] = makeEnum(6);
const [isGuess, G_ZERU, G_UNU, G_DUI, G_TRE, G_QUATTRU, G_CINQUE, G_SEI, G_SETTE, G_OTTU, G_NOVE, G_DECE] = makeEnum(11);
const [isTotal, T_ZERU, T_UNU, T_DUI, T_TRE, T_QUATTRU, T_CINQUE, T_SEI, T_SETTE, T_OTTU, T_NOVE, T_DECE] = makeEnum(11);
const [isScoreAlice, A_ZERO, A_ONE, A_TWO, A_THREE] = makeEnum(4);
const [isScoreBob, B_ZERO, B_ONE, B_TWO, B_THREE] = makeEnum(4);
const [isOutcome, A_WINS, DRAW, B_WINS] = makeEnum(3);

//let's write the logic
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

const scoreAlice = (handAlice, handBob, guessAlice, guessBob) => {
    //const scoreAlice = 0;
    if(guessAlice == (handAlice + handBob) && guessBob != (handAlice + handBob)) {
        //scoreAlice++;
        const scoreAlice = 1;
        return scoreAlice;
    } else {
        const scoreAlice = 0;
        return scoreAlice;
    };
};

const scoreBob = (handAlice, handBob, guessAlice, guessBob) => {
    if(guessBob == (handAlice + handBob) && guessAlice != (handAlice + handBob)) {
        const scoreBob = 1;
        return scoreBob;
    } else {
        const scoreBob = 0;
        return scoreBob;
    };
};

//While scoreAlice && scoreBob < 3, loop it up. Whomstever is first to 3 wins


//let's make some assertions
//soon


const Player = {
    throwHand: Fun([], UInt),
    guessTotal: Fun([], UInt),
    seeTotal: Fun([UInt], Null),
    seeOutcome: Fun([UInt], Null),
    seeScoreAlice: Fun([UInt], Null),
    seeScoreBob: Fun([UInt], Null)
};

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt
    });
    const Bob = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null)
    });

    init();

    Alice.only(() => {
        const wager = declassify(interact.wager);
        const handAlice = declassify(interact.throwHand());
        const guessAlice = declassify(interact.guessTotal());
    });
    Alice.publish(wager, handAlice, guessAlice).pay(wager);
    commit();

    Bob.only(() => {
        interact.acceptWager(wager);
        const handBob = declassify(interact.throwHand());
        const guessBob = declassify(interact.guessTotal());
    });
    Bob.publish(handBob, guessBob).pay(wager);

    const total = () => {
        const total = handAlice + handBob;
        return total;
    } 

    const winner = outcome(handAlice, handBob, guessAlice, guessBob);
    const              [forAlice, forBob] = 
        winner == A_WINS ? [       2,      0] :
        winner == B_WINS ? [       0,      2] :
        /* tie           */ [       1,      1];

    transfer(forAlice * wager).to(Alice);
    transfer(forBob   * wager).to(Bob);
    commit();
   
    each([Alice, Bob], () => {
        interact.seeTotal(total());
        interact.seeOutcome(outcome(handAlice, handBob, guessAlice, guessBob));
        interact.seeScoreAlice(scoreAlice(handAlice, handBob, guessAlice, guessBob));
        interact.seeScoreBob(scoreBob(handAlice, handBob, guessAlice, guessBob));
    });

});



