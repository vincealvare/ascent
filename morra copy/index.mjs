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
let account = null;
const createAccount = await ask.ask(
    `Would you like to create a devnet account?`,
    ask.yesno
);
if(createAccount) {
    account = await stdlib.newTestAccount(stdlib.parseCurrency(100));
} else {
    const secret = await ask.ask(
        `What is your account secret?`,
        (x => x) 
    );
    account = await stdlib.newAccountFromSecret(secret);
}

let contract = null;
if(isAlice) {
    contract = account.contract(backend);
    contract.getInfo().then((info) => {
        console.log(`The contract us deployed as = ${JSON.stringify(info)}`);
    });
} else {
    const info = await ask.ask(
        `Please past the contract information:`,
        JSON.parse
    );
    contract = acc.contract(backend, info);
}

const format = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => format(await stdlib.balanceOf(account)); //changed slightly for gui

const before = await getBalance();
console.log(`Your balance is ${before}`);

const interact = {...stdlib.hasRandom};

interact.informTimeout = () => {
    console.log(`There was a timeout...`);
    process.exit(1);
};

if(isAlice) {
     const amount = await ask.ask(
        `How much do you want to wager?`,
        stdlib.parseCurrency
     );
     interact.wager = amount;
     interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000}[stdlib.connector];
} else {
    interact.acceptWager = async (amount) => {
        const accepted = await ask.ask(

        );
        if (!accepted) {
            process.exit(0);
        }
    };
}


//LEAVING OFF AT RPS 323

const HAND = ['Zeru', 'Unu', 'Dui', 'Tre', 'Quattru', 'Cinque'];
const GUESS = ['Zeru', 'Unu', 'Dui', 'Tre', 'Quattru', 'Cinque', 'Sei', 'Sette', 'Ottu', 'Nove', 'Dece'];
const TOTAL = ['Zeru', 'Unu', 'Dui', 'Tre', 'Quattru', 'Cinque', 'Sei', 'Sette', 'Ottu', 'Nove', 'Dece'];
const OUTCOME = ['Alice wins', 'Draw', 'Bob wins'];

// const startingBalance = stdlib.parseCurrency(100);
// const accAlice = await stdlib.newTestAccount(startingBalance);
// const accBob = await stdlib.newTestAccount(startingBalance);
//
// const beforeAlice = await getBalance(accAlice);
// const beforeBob = await getBalance(accBob);
//
// const ctcAlice = accAlice.contract(backend);
// const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

// const HAND = ['Zeru', 'Unu', 'Dui', 'Tre', 'Quattru', 'Cinque'];
// const GUESS = ['Zeru', 'Unu', 'Dui', 'Tre', 'Quattru', 'Cinque', 'Sei', 'Sette', 'Ottu', 'Nove', 'Dece'];
// const TOTAL = ['Zeru', 'Unu', 'Dui', 'Tre', 'Quattru', 'Cinque', 'Sei', 'Sette', 'Ottu', 'Nove', 'Dece'];
// const OUTCOME = ['Alice wins', 'Draw', 'Bob wins'];

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