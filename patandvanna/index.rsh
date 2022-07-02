'reach 0.1';

const Player = {
    //provide methods
    getChallenge: Fun([], UInt),
    seeResult: Fun([UInt], Null)
}

//app init
export const main = Reach.App(() => {
const Pat = Participant('Pat', {
    //interact interface
    ...Player,
});
const Vanna = Participant('Vanna', {
    //interact interface
    ...Player,
});

init(); //end app init

//Pat's local step
Pat.only(() => {
    //interact expression
    const challengePat = declassify(interact.getChallenge());
});
//move to consensus step
Pat.publish(challengePat);
commit();  

//Vanna's local step
Vanna.only(() => {
    //interact expression
    const challengeVanna = declassify(interact.getChallenge());
});
//move to consensus step
Vanna.publish(challengeVanna);
commit();

});