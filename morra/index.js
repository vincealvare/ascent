import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
//sets wallet to fallback solution
reach.setWalletFallback(reach.walletFallback({}));

const handToInt = {'ZERU': 0, 'UNU': 1, 'DUI': 2, 'TRE': 3, 'QUATTRU': 4, 'CINQUE': 5};
const guessToInt = {'ZERU': 0, 'UNU': 1, 'DUI': 2, 'TRE': 3, 'QUATTRU': 4, 'CINQUE': 5, 'SEI': 6, 'SETTE': 7, 'OTTU': 8, 'NOVE': 9, 'DECE': 10};
//const totalToInt = {'ZERU': 0, 'UNU': 1, 'DUI': 2, 'TRE': 3, 'QUATTRU': 4, 'CINQUE': 5, 'SEI': 6, 'SETTE': 7, 'OTTU': 8, 'NOVE': 9, 'DECE': 10};
const intToOutcome = ['Bob wins', 'Draw', 'Alice wins'];

const {standardUnit} = reach;
const defaults = {defaultFundAmount: '100', defaultWager: '30', standardUnit};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {view: 'ConnectAccount', ...defaults};
    }
    async componentDidMount() {
        const account = await reach.getDefaultAccount();
        const balanceAtomic = await reach.balanceOf(account);
        const balance = reach.formatCurrency(balanceAtomic, 4);
        this.setState({account, balance});
        if(await reach.canFundFromFaucet()) {
            this.setState({view: 'FundAccount'});
        } else {
            this.setState({view: 'DeployerOrAttacher'});
        }
    }
    async fundAccount(fundAmount) {
        await reach.fundFromFaucet(this.state.account, reach.parseCurrency(fundAmount));
        this.setState({view: 'DeployerOrAttacher'});
    }
    async skipFundAccount() {
        this.setState({view: 'DeployerOrAttacher'});
    }
    selectAttacher() { 
        this.setState({view: 'Wrapper', ContentView: Attacher}); 
    }
    selectDeployer() {
        this.setState({view: 'Wrapper', ContentView: Deployer});
    }
    render() { 
        return renderView(this, AppViews); 
    }
}

class Player extends React.Component {
    random() {
        return reach.hasRandom.random();
    }
    async getHand() {
        const hand = await new Promise(resolveHandP => {
            this.setState({view: 'GetHand', playable: true, resolveHandP});
        });
        this.setState({view: 'WaitingForResults', hand});
        return handToInt[hand];
    }
    async getGuess() {
        const guess = await new Promise(resolveGuessP => {
            this.setState({view: 'GetGuess', playable: true, resolveGuessP});
        });
        this.setState({view: 'WaitingForResults', guess});
        return guessToInt[guess];
    }
    seeOutcome(i) {
        this.setState({view: 'Done', outcome: intToOutcome[i]});
    }
    informTimeout() {
        this.setState({view: 'Timeout'});
    }
    playHand(hand) {
        this.state.resolveHandP(hand);
    }
    playGuess(guess) {
        this.state.resolveGuessP(guess);
    }
}

class Deployer extends Player {
    constructor(props) {
        super(props);
        this.state = {view: 'SetWager'};
    }
    setWager(wager) {
        this.setState({view: 'Deploy', wager});
    }
    async deploy() {
        const contract = this.props.account.contract(backend);
        this.setState({view: 'Deploying', contract});
        this.wager = reach.parseCurrency(this.state.wager);
        this.deadline = {ETH: 10, ALGO: 10, CFX: 100}[reach.connector];
        backend.Alice(contract, this);
        const contractInfoString = JSON.stringify(await contract.getInfo(), null, 2);
        this.setState({view: 'WaitingForAttacher', contractInfoString});
    }
    render() { 
        return renderView(this, DeployerViews); 
    }
}

class Attacher extends Player {
    constructor(props) {
        super(props);
        this.state = {view: 'Attach'};
    }
    attach(contractInfoString) {
        const contract = this.props.account.contract(backend, JSON.parse(contractInfoString));
        this.setState({view: 'Attaching'});
        backend.Bob(contract, this);
    }
    async acceptWager(wagerAtomic) {
        const wager = reach.formatCurrency(wagerAtomic, 4);
        return await new Promise(resolveAcceptedP => {
            this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
        });
    }
    termsAccepted() {
        this.state.resolveAcceptedP();
        this.setState({view: 'WaitingForTurn'});
    }
    render() {
        return renderView(this, AttacherViews);
    }
}



renderDOM(<App />);