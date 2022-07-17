import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const HAND = ['Zeru', 'Unu', 'Dui', 'Tre', 'Quattru', 'Cinque'];
const GUESS = ['Zeru', 'Unu', 'Dui', 'Tre', 'Quattru', 'Cinque', 'Sei', 'Sette', 'Ottu', 'Nove', 'Dece'];
const OUTCOME = ['Alice wins', 'Draw', 'Bob wins'];

const Player = (Who) => ({
    throwHand: () => {
        const hand = Math.floor(Math.random() * 6);
        console.log(`${Who} played ${HAND[hand]}`);
        return hand;
    },
    guessTotal: () => {
        const guess = Math.floor(Math.random() * 11);
        console.log(`${Who} guessed ${GUESS[guess]}`);
        return guess;
    },
    seeOutcome: (outcome) => {
        console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    }
});

await Promise.all([
    ctcAlice.p.Alice({
        ...Player('Alice'),
    }),
    ctcBob.p.Bob({
        ...Player('Bob'),
    }),
]);