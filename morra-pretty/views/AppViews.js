import React from 'react';

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h1>WELCOME TO MORRA</h1>
          <div className="content-main">
            {content}
          </div>
        </header>
      </div>
    );
  }
}

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div className="content-inner">
        Please connect your wallet to start
      </div>
    )
  }
}

exports.FundAccount = class extends React.Component {
  render() {
    const {balance, standardUnit, defaultFundAmount, parent} = this.props;
    const amount = (this.state || {}).amt || defaultFundAmount;
    return (
      <div>
        <h2>Your Account</h2>
        <br />
        Balance: <span className="balance">{balance} {standardUnit}</span>
        <hr />
        Would you like to fund your account with additional <span className="balance">{standardUnit}</span>?
        <br />
        <div className="fund-inputs">
          <input
            type='number'
            placeholder={defaultFundAmount}
            onChange={(e) => this.setState({amount: e.currentTarget.value})}
          />
          <button onClick={() => parent.fundAccount(amount)}>Fund Account</button>
          <button onClick={() => parent.skipFundAccount()}>Skip</button>
        </div>
      </div>
    );
  }
}

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const {parent} = this.props;
    return (
      <div>
        <h2>Select Your Role</h2>
        <p>
          <button
            onClick={() => parent.selectDeployer()}
          >Deployer</button>
          <br /> Set the wager, deploy the contract.
        </p>
        <hr />
        <p>
          <button
            onClick={() => parent.selectAttacher()}
          >Attacher</button>
          <br /> Attach to the Deployer's contract.
        </p>
      </div>
    );
  }
}

export default exports;