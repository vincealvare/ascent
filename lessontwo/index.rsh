'reach 0.1';

//participant interact interface
const Player = {
    //methods
    getHand: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
};

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        //alice's wager
        wager: UInt,
    });
    const Bob = Participant('Bob', {
        ...Player,
        //bob accepting (or not?)
        acceptWager: Fun([UInt], Null),
    });

    init();

    //alice local step
    Alice.only(() => {
        const wager = declassify(interact.wager);
        const handAlice = declassify(interact.getHand());
    });
    //include all vars above in the publish below and pay. Can line break and tab beginning at .pay if needed
    Alice.publish(handAlice, wager).pay(wager);
    commit();

    //bob local step
    Bob.only(() => {
        interact.acceptWager(wager);
        const handBob = declassify(interact.getHand());
    });
    //bob accepts wager, pays the wager, and publishes his hand
    Bob.publish(handBob).pay(wager);

    const outcome = (handAlice + (4 - handBob)) % 3;
    const              [forAlice, forBob] =
        outcome == 2 ? [       2,      0] :
        outcome == 0 ? [       0,      2] :
        /* draw     */ [       1,      1];
    //transfer either 2(win), 1(tie), 0(loss) for each player
    transfer(forAlice * wager).to(Alice);
    transfer(forBob   * wager).to(Bob);
    commit();

    each([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    });
});