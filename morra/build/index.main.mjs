// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v71 = stdlib.protect(ctc0, await interact.throwHand(), {
    at: './index.rsh:20:56:application',
    fs: ['at ./index.rsh:19:15:application call to [unknown function] (defined at: ./index.rsh:19:19:function exp)'],
    msg: 'throwHand',
    who: 'Alice'
    });
  const v72 = stdlib.protect(ctc0, await interact.guessTotal(), {
    at: './index.rsh:21:58:application',
    fs: ['at ./index.rsh:19:15:application call to [unknown function] (defined at: ./index.rsh:19:19:function exp)'],
    msg: 'guessTotal',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v71, v72],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:23:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v74, v75], secs: v77, time: v76, didSend: v29, from: v73 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v74, v75], secs: v77, time: v76, didSend: v29, from: v73 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v83, v84], secs: v86, time: v85, didSend: v40, from: v82 } = txn2;
  ;
  let v91;
  const v92 = stdlib.eq(v75, v84);
  if (v92) {
    v91 = stdlib.checkedBigNumberify('./index.rsh:40:25:decimal', stdlib.UInt_max, '1');
    }
  else {
    const v93 = stdlib.add(v74, v83);
    const v94 = stdlib.eq(v93, v75);
    if (v94) {
      v91 = stdlib.checkedBigNumberify('./index.rsh:44:29:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v96 = stdlib.eq(v93, v84);
      if (v96) {
        v91 = stdlib.checkedBigNumberify('./index.rsh:48:33:decimal', stdlib.UInt_max, '2');
        }
      else {
        v91 = stdlib.checkedBigNumberify('./index.rsh:51:33:decimal', stdlib.UInt_max, '1');
        }
      }
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v91), {
    at: './index.rsh:60:28:application',
    fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v74, v75], secs: v77, time: v76, didSend: v29, from: v73 } = txn1;
  ;
  const v80 = stdlib.protect(ctc0, await interact.throwHand(), {
    at: './index.rsh:27:54:application',
    fs: ['at ./index.rsh:26:13:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'throwHand',
    who: 'Bob'
    });
  const v81 = stdlib.protect(ctc0, await interact.guessTotal(), {
    at: './index.rsh:28:56:application',
    fs: ['at ./index.rsh:26:13:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'guessTotal',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v80, v81],
    evt_cnt: 2,
    funcNum: 1,
    lct: v76,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v83, v84], secs: v86, time: v85, didSend: v40, from: v82 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v83, v84], secs: v86, time: v85, didSend: v40, from: v82 } = txn2;
  ;
  let v99;
  const v100 = stdlib.eq(v75, v84);
  if (v100) {
    v99 = stdlib.checkedBigNumberify('./index.rsh:40:25:decimal', stdlib.UInt_max, '1');
    }
  else {
    const v101 = stdlib.add(v74, v83);
    const v102 = stdlib.eq(v101, v75);
    if (v102) {
      v99 = stdlib.checkedBigNumberify('./index.rsh:44:29:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v104 = stdlib.eq(v101, v84);
      if (v104) {
        v99 = stdlib.checkedBigNumberify('./index.rsh:48:33:decimal', stdlib.UInt_max, '2');
        }
      else {
        v99 = stdlib.checkedBigNumberify('./index.rsh:51:33:decimal', stdlib.UInt_max, '1');
        }
      }
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v99), {
    at: './index.rsh:60:28:application',
    fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAEIJgEAIjUAMRhBAOsoZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAADEjEkQjNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gATHtgrVNP8WUDT+FlCwQgA9SIGgjQaIAKIiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQjMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v74",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v74",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v84",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v83",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v84",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161067d38038061067d833981016040819052610022916101bb565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1610085341560076100c3565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100bb9260029201906100ec565b505050610250565b816100e85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100f890610215565b90600052602060002090601f01602090048101928261011a5760008555610160565b82601f1061013357805160ff1916838001178555610160565b82800160010185558215610160579182015b82811115610160578251825591602001919060010190610145565b5061016c929150610170565b5090565b5b8082111561016c5760008155600101610171565b604080519081016001600160401b03811182821017156101b557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101ce57600080fd5b6101d6610185565b835181526040601f19830112156101ec57600080fd5b6101f4610185565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061022957607f821691505b6020821081141561024a57634e487b7160e01b600052602260045260246000fd5b50919050565b61041e8061025f6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f11461004957806342ae229d1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b366004610315565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa6101fd565b60405161006492919061032d565b6100c8600160005414600961029a565b6100e2813515806100db57506001548235145b600a61029a565b6000808055600280546100f49061038a565b80601f01602080910402602001604051908101604052809291908181526020018280546101209061038a565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103bf565b604080513381528435602080830191909152850135818301529084013560608201529091507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a16101e33415600861029a565b600080805560018190556101f9906002906102bf565b5050565b6000606060005460028080546102129061038a565b80601f016020809104026020016040519081016040528092919081815260200182805461023e9061038a565b801561028b5780601f106102605761010080835404028352916020019161028b565b820191906000526020600020905b81548152906001019060200180831161026e57829003601f168201915b50505050509050915091509091565b816101f95760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102cb9061038a565b6000825580601f106102db575050565b601f0160209004906000526020600020908101906102f991906102fc565b50565b5b8082111561031157600081556001016102fd565b5090565b60006060828403121561032757600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561036157858101830151858201606001528201610345565b81811115610373576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061039e57607f821691505b6020821081141561032757634e487b7160e01b600052602260045260246000fd5b6000602082840312156103d157600080fd5b815180151581146103e157600080fd5b939250505056fea2646970667358221220e02c8e04ec92e2e1bec17eb5ebd21e06a359c40d22db9fe968ad62a11e233c8064736f6c634300080c0033`,
  BytecodeLen: 1661,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:24:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:32:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
