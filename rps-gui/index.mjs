import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accountAlice = await stdlib.newTestAccount(startingBalance);
const accountBob = await stdlib.newTestAccount(startingBalance);

const format = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => format(await stdlib.balanceOf(who));
const beforeAlice = await getBalance(accountAlice);
const beforeBob = await getBalance(accountBob);

const contractAlice = accountAlice.contract(backend);
const contractBob = accountBob.contract(backend, contractAlice.getInfo());

const HAND = ['Rock', 'Paper', 'Scissors'];
const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];

//hasRandom adds random number generation functionality
const Player = (Who) => ({
    ...stdlib.hasRandom,
    getHand: () => {
      const hand = Math.floor(Math.random() * 3);
      console.log(`${Who} played ${HAND[hand]}`);
      return hand;
    },
    seeOutcome: (outcome) => {
      console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
    informTimeout: () => {
      console.log(`${Who} observed a timeout`);
    }
});

await Promise.all([
    contractAlice.p.Alice({
      ...Player('Alice'),
      wager: stdlib.parseCurrency(5),
      deadline: 10
    }),
    contractBob.p.Bob({
      ...Player('Bob'),
      acceptWager: async (amount) => { 
        if(Math.random() <= 0.01) { //will return true 1/100 times
          for(let i = 0; i < 10; i++) {
            console.log(`Bob is like, really slow...`);
            await stdlib.wait(1); //wait 1 block time
          }
        } else {
          console.log(`Bob accepts the wager of ${format(amount)}.`);
        }
      },
    }),
]);

const afterAlice = await getBalance(accountAlice);
const afterBob = await getBalance(accountBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);