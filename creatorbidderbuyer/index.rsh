'reach 0.1';

//provide methods
const Player = {
    seePrice: Fun([], UInt),
    getDescription: Fun([], Bytes(280))
}

export const main = Reach.App(() => {
    const Creator = Participant('Creator', {
        //interact interface
        ...Player,
    });
    const Bidder = Participant('Bidder', {
        //interact interface
        ...Player,
    });
    const Buyer = Participant('Buyer', {
        //interact interface
        ...Player,
    });

    init();

    Bidder.only(() => {
        const price = declassify(interact.seePrice());
    });
    Bidder.publish(price);
    commit();

    Buyer.only(() => {
        const description = declassify(interact.getDescription());
    });
    Buyer.publish(description);
    commit();

});