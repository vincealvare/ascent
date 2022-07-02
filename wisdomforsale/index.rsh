'reach 0.1';

const commonInteract = {};
const sellerInteract = {
    ...commonInteract,
};
const buyerInteract = {
    ...commonInteract,
};

export const main = Reach.App(() => {
const Seller = Participant('Seller', sellerInteract);
const Buyer = Participant('Buyer', buyerInteract);

init(); 

exit();

});

//left off at step 74 of tutorial
// https://docs.reach.sh/tut/wfs/#p_71