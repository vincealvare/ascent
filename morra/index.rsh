'reach 0.1';

const Player = {
    throwHand: Fun([], UInt),
    guessTotal: Fun([], UInt),
    seeOutcome: Fun([UInt], Null)
};

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
    });
    const Bob = Participant('Bob', {
        ...Player
    });

    init();

    Alice.only(() => {
        const handAlice = declassify(interact.throwHand());
        const guessAlice = declassify(interact.guessTotal());
    });
    Alice.publish(handAlice, guessAlice);
    commit();

    Bob.only(() => {
        const handBob = declassify(interact.throwHand());
        const guessBob = declassify(interact.guessTotal());
    });
    Bob.publish(handBob, guessBob);

    commit();

    //const total = handAlice + handBob;

    //0 = Alice wins, 1 = Draw, 2 = Bob wins
    
    const outcome = () => {
    if(guessAlice == guessBob) {
        const outcome = 1;
        return outcome;
    } else {
        if((handAlice + handBob) == guessAlice){
            const outcome = 0;
            return outcome;
        } else {
            if((handAlice + handBob) == guessBob){
                const outcome = 2;
                return outcome;
            } else {
                const outcome = 1;
                return outcome;
            }
        }
    }};

    each([Alice, Bob], () => {
        interact.seeOutcome(outcome());
    });

});



