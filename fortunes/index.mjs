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

const FORTUNE = ['Courtesy is contagious', 'Now is the time to try something new', 'Imagination rules the world'];
const RULING = ['Bogus', 'True'];

const Player = (Who) => ({
    readFortune: () => {
        const fortune = Math.floor(Math.random() * 3);
        console.log(`${Who} read the fortune: "${FORTUNE[fortune]}"`);
        return fortune;
    }
});

await Promise.all([
    ctcAlice.p.Alice({
        ...Player('Alice'),
        price: stdlib.parseCurrency(5), //can this be defined elsewhere?
        judgeFortune: () => {
            const ruling = Math.floor(Math.random() * 2);
            console.log(`${Who} ruled that the fortune was ${RULING[ruling]}`);
            return ruling;
        }
    }),
    ctcBob.p.Bob({
        ...Player('Bob')
    }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);