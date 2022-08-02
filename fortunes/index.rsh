'reach 0.1';

const Player = {
    readFortune: Fun([], UInt)
};

const [isFortune, FIRST, SECOND, THIRD] = makeEnum(3);
const [isRuling, FALSE, TRUE] = makeEnum(2);

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        donation: UInt,
        judgeFortune: Fun([], UInt)
    });
    const Bob = Participant('Bob', {
        ...Player
    });

    init();

    Alice.only(() => {
        const donation = declassify(interact.donation);
    });
    Alice.publish(donation)
    //.pay(price)
    ;
    commit();

    Bob.only(() => {
        //const fortune = declassify(interact.fortune);
    });
    //Bob.publish(fortune)
    //.pay()
    ;

});



