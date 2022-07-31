import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const format = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => format(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const HAND = ['Zeru', 'Unu', 'Dui', 'Tre', 'Quattru', 'Cinque'];
const GUESS = ['Zeru', 'Unu', 'Dui', 'Tre', 'Quattru', 'Cinque', 'Sei', 'Sette', 'Ottu', 'Nove', 'Dece'];
const TOTAL = ['Zeru', 'Unu', 'Dui', 'Tre', 'Quattru', 'Cinque', 'Sei', 'Sette', 'Ottu', 'Nove', 'Dece'];
const OUTCOME = ['Alice wins', 'Draw', 'Bob wins'];

const Player = (Who) => ({
    ...stdlib.hasRandom,
    throwHand: async () => {
        const hand = Math.floor(Math.random() * 6);
        console.log(`${Who} played ${HAND[hand]}`);
        if(Math.random() <= 0.01) {
            for(let i = 0; i < 10; i++) {
                console.log(`Waiting on ${Who}...`);
                await stdlib.wait(1);
            }
        }
        return hand;
    },
    guessTotal: () => {
        const guess = Math.floor(Math.random() * 11);
        console.log(`${Who} guessed ${GUESS[guess]}`);
        return guess;
    },
    seeTotal: (total) => {
        console.log(`${Who} saw total: ${TOTAL[total]}`);
    },
    seeOutcome: (outcome) => {
        console.log(`${Who} saw outcome: ${OUTCOME[outcome]}`);
    },
    informTimeout: () => {
        console.log(`${Who} observed a timeout...`);
    }
});

await Promise.all([
    ctcAlice.p.Alice({
        ...Player('Alice'),
        wager: stdlib.parseCurrency(5),
        deadline: 10
    }),
    ctcBob.p.Bob({
        ...Player('Bob'),
        acceptWager: (amount) => {
            console.log(`Bob accepts the wager of: ${format(amount)}`);
        }
    }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);