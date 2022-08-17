import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        Choose your hand:
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playHand('ZERU')}
        >ZERU</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('UNU')}
        >UNU</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('DUI')}
        >DUI</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('TRE')}
        >TRE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('QUATTRU')}
        >QUATTRU</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('CINQUE')}
        >CINQUE</button>
      </div>
    );
  }
}

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, guess} = this.props;
    return (
      <div>
        {guess ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        Guess the total:
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('ZERU')}
        >ZERU</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('UNU')}
        >UNU</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('DUI')}
        >DUI</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('TRE')}
        >TRE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('QUATTRU')}
        >QUATTRU</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('CINQUE')}
        >CINQUE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('SEI')}
        >SEI</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('SETTE')}
        >SETTE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('OTTU')}
        >OTTU</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('NOVE')}
        >NOVE</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('DECE')}
        >DECE</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;