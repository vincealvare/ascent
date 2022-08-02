'reach 0.1';

const commonInteract = {};
const buyerInteract = {
    ...commonInteract
};
const sellerInteract = {
    ...commonInteract
}

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {

    });
    const Bob = Participant('Bob', {

    });
    init();

    exit();
});