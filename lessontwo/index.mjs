import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

//function that takes parsed amount and shows up to 4 decimal places
const fmt = (x) => stdlib.formatCurrency(x, 4);
//function that gets the balance of our participant
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
//get alice before balance
const beforeAlice = await getBalance(accAlice);
//get bob before balance
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const HAND = ['Rock', 'Paper', 'Scissors'];
const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];

const Player = (Who) => ({
    getHand: () => {
        const hand = Math.floor(Math.random() * 3);
        console.log(`${Who} played ${HAND[hand]}`);
        return hand;
    },
    seeOutcome: (outcome) => {
        console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    }
});

//interface object -- contents reflect participant interact interface in the backend
await Promise.all([
    ctcAlice.p.Alice({
        ...Player('Alice'),
        //alice create's a wager (hardcoded to 5)
        wager: stdlib.parseCurrency(5),
    }),
    ctcBob.p.Bob({
        ...Player('Bob'),
        //bob accepts the wager (or does he?)
        acceptWager: (amt) => {
            console.log(`Bob accepts the wager of ${fmt(amt)}.`);
        },
    }),
]);

//get and print alice after balance
const afterAlice = await getBalance(accAlice);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
//get and print bob after balance
const afterBob = await getBalance(accBob);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);