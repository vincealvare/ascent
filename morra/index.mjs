import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

//expecting a yes/no y/n answer
const isAlice = await ask.ask(
    `Alice, is that you?`,
    ask.yesno
);
const who = isAlice ? 'Alice' : 'Bob';

console.log(`Starting Morra as ${who}`);

//need to make or access a devnet account
let acc = null;
const createAcc = await ask.ask(
    `Would you like to create an account?`,
    ask.yesno
);
if(createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(100));
} else {
    const secret = await ask.ask(
        `What is your account secret?`,
        (x => x) //no clue what this does
    );
    acc = await stdlib.newAccountFromSecret(secret);
}

//leaving off at RPS line 317




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