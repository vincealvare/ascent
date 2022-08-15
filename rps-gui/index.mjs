import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const isAlice = await ask.ask(
  `Are you Alice?`,
  ask.yesno
);
const who = isAlice ? 'Alice' : 'Bob';

console.log(`Starting RPS as ${who}`);

let account = null;
const createAccount = await ask.ask(
  `Would you like to create a devnet account?`,
  ask.yesno
);
if(createAccount) {
  account = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
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
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
  });
} else {
  const info = await ask.ask(
    `Paste the contract information:`,
    JSON.parse
  );
  contract = account.contract(backend, info);
}

const format = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => format(await stdlib.balanceOf(account));

const before = await getBalance();
console.log(`Your balance is ${before}`);

const interact = {...stdlib.hasRandom};

interact.informTimeout = () => {
  console.log(`There was a timeout...`);
  process.exit(1);
};

if (isAlice) {
  const amount = await ask.ask(
    `How much do you wanna wager?`,
    stdlib.parseCurrency
  );
  interact.wager = amount;
  interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
} else {
  interact.acceptWager = async (amount) => {
    const accepted = await ask.ask(
      `Do you accept the wager of: ${format(amount)}?`,
      ask.yesno
    );
    if(!accepted) {
      process.exit(0); //0 is right away, no more blocks!
    }
  };
}

const HAND = ['ROCK', 'PAPER', 'SCISSORS'];
const HANDS = {
  'Rock': 0, 'R': 0, 'r': 0, 'rock': 0,
  'Paper': 1, 'P': 1, 'p': 1, 'paper': 1,
  'Scissors': 2, 'S': 2, 's': 2, 'scissors': 2
}

interact.getHand = async () => {
  const hand = await ask.ask(
    `What hand will you play?`,
    (x) => {
      const hand = HANDS[x];
      if(hand === undefined) {
        throw Error(`Not a valid hand ${hand}`);
      }
      return hand;
    }
  );
  console.log(`You played ${HAND[hand]}`);
  return hand;
};

const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];
interact.seeOutcome = async (outcome) => {
  console.log(`${OUTCOME[outcome]} the match!`);
};


const participant = isAlice ? contract.p.Alice : contract.p.Bob;
await participant(interact);

const after = await getBalance();
console.log(`Your balance is now ${after}`);

ask.done();

