'reach 0.1';

const Player = {
    ...hasRandom,
    throwHand: Fun([], UInt),
    guessTotal: Fun([], UInt),
    seeTotal: Fun([UInt], Null),
    seeOutcome: Fun([UInt], Null)
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

    //0 = Alice wins, 1 = Draw, 2 = Bob wins
    
    const outcome = () => {
        if(guessAlice == guessBob) {
            const outcome = 1;
            return outcome;
        } else if(guessAlice == (handAlice + handBob)) {
            const outcome = 0;
            return outcome;
        } else if(guessBob == (handAlice + handBob)) {
            const outcome = 2;
            return outcome;
        } else {
            const outcome = 1;
            return outcome;
        };
    };
    //Need to use assertations for this logic
    const forAlice = 2;
    const forBob = 0;
    transfer(forAlice * wager).to(Alice);
    transfer(forBob   * wager).to(Bob);
    commit();
   
    each([Alice, Bob], () => {
        interact.seeTotal(total());
        interact.seeOutcome(outcome());
    });

});



