'reach 0.1';

const Player = {
    seePrice: Fun([], UInt),
    getDescription: Fun([], Bytes(280))
}

export const main = Reach.App(() => {
    const Creator = Participant('Creator', {
        ...Player,
    });
    const Bidder = Participant('Bidder', {
        ...Player,
    });
    const Buyer = Participant('Buyer', {
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