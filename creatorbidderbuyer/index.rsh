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
        price: UInt
    });
    const Buyer = Participant('Buyer', {
        ...Player,
        getPrice: Fun([], UInt)
    });

    init();

    Bidder.only(() => {
        const price = declassify(interact.seePrice());
    });
    Bidder.publish(price);
    commit();

    Buyer.only(() => {
        const description = declassify(interact.getDescription());
        const payment = declassify(interact.getPrice());
    });
    //something is wrong here! does not compile
    Buyer.publish(description, payment).pay(payment);
    commit();

}); 