import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);
const accountAlice = await stdlib.newTestAccount(startingBalance);
const accountBob = await stdlib.newTestAccount(startingBalance);

const contractAlice = accountAlice.contract(backend);
const contractBob = accountBob.contract(backend, contractAlice.getInfo());

await Promise.all([
    contractAlice.p.Alice({

    }),
    contractBob.p.Bob({

    })
]);
