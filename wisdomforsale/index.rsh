'reach 0.1';

const commonInteract = {
    reportCancellation: Fun([], Null),
    reportTransfer: Fun([UInt], Null),
    reportPayment: Fun([UInt], Null),
};
const sellerInteract = {
    ...commonInteract,
    price: UInt,
    wisdom: Bytes(280),
    reportReady: Fun([UInt], Null),
};
const buyerInteract = {
    ...commonInteract,
    confirmPurchase: Fun([UInt], Bool),
    reportWisdom: Fun([Bytes(280)], Null),
};

export const main = Reach.App(() => {
const Seller = Participant('Seller', sellerInteract);
const Buyer = Participant('Buyer', buyerInteract);

init(); 

Seller.only(() => {
    const price = declassify(interact.price);
});
Seller.publish(price);
Seller.interact.reportReady(price);
commit();

Buyer.only(() => {
    const willBuy = declassify(interact.confirmPurchase(price));
});
Buyer.publish(willBuy);
if (!willBuy) {
    commit();
    each([Seller, Buyer], () => interact.reportCancellation());
    exit();
} else {
    commit();
}

Buyer.pay(price);
each([Seller, Buyer], () => interact.reportPayment(price));
commit();

Seller.only(() => {
    const wisdom = declassify(interact.wisdom);
});
Seller.publish(wisdom);
transfer(price).to(Seller);
commit();

each([Seller, Buyer], () => interact.reportTransfer(price));
Buyer.interact.reportWisdom(wisdom);

exit();

});
