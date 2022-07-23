// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
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
  
  
  const v84 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v87 = stdlib.protect(ctc0, await interact.throwHand(), {
    at: './index.rsh:25:56:application',
    fs: ['at ./index.rsh:23:15:application call to [unknown function] (defined at: ./index.rsh:23:19:function exp)'],
    msg: 'throwHand',
    who: 'Alice'
    });
  const v88 = stdlib.protect(ctc0, await interact.guessTotal(), {
    at: './index.rsh:26:58:application',
    fs: ['at ./index.rsh:23:15:application call to [unknown function] (defined at: ./index.rsh:23:19:function exp)'],
    msg: 'guessTotal',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v84, v87, v88],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v84, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v90, v91, v92], secs: v94, time: v93, didSend: v33, from: v89 } = txn1;
      
      sim_r.txns.push({
        amt: v90,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v90, v91, v92], secs: v94, time: v93, didSend: v33, from: v89 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v102, v103], secs: v105, time: v104, didSend: v46, from: v101 } = txn2;
  ;
  const v108 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:61:22:decimal', stdlib.UInt_max, '2'), v90);
  ;
  const v117 = stdlib.add(v91, v102);
  stdlib.protect(ctc1, await interact.seeTotal(v117), {
    at: './index.rsh:68:26:application',
    fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:27:function exp)'],
    msg: 'seeTotal',
    who: 'Alice'
    });
  let v118;
  const v119 = stdlib.eq(v92, v103);
  if (v119) {
    v118 = stdlib.checkedBigNumberify('./index.rsh:47:29:decimal', stdlib.UInt_max, '1');
    }
  else {
    const v121 = stdlib.eq(v92, v117);
    if (v121) {
      v118 = stdlib.checkedBigNumberify('./index.rsh:50:29:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v123 = stdlib.eq(v103, v117);
      if (v123) {
        v118 = stdlib.checkedBigNumberify('./index.rsh:53:29:decimal', stdlib.UInt_max, '2');
        }
      else {
        v118 = stdlib.checkedBigNumberify('./index.rsh:56:29:decimal', stdlib.UInt_max, '1');
        }
      }
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v118), {
    at: './index.rsh:69:28:application',
    fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:27:function exp)'],
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
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v90, v91, v92], secs: v94, time: v93, didSend: v33, from: v89 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v90), {
    at: './index.rsh:32:29:application',
    fs: ['at ./index.rsh:31:13:application call to [unknown function] (defined at: ./index.rsh:31:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v99 = stdlib.protect(ctc0, await interact.throwHand(), {
    at: './index.rsh:33:54:application',
    fs: ['at ./index.rsh:31:13:application call to [unknown function] (defined at: ./index.rsh:31:17:function exp)'],
    msg: 'throwHand',
    who: 'Bob'
    });
  const v100 = stdlib.protect(ctc0, await interact.guessTotal(), {
    at: './index.rsh:34:56:application',
    fs: ['at ./index.rsh:31:13:application call to [unknown function] (defined at: ./index.rsh:31:17:function exp)'],
    msg: 'guessTotal',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v89, v90, v99, v100],
    evt_cnt: 2,
    funcNum: 1,
    lct: v93,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v90, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v102, v103], secs: v105, time: v104, didSend: v46, from: v101 } = txn2;
      
      sim_r.txns.push({
        amt: v90,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v108 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:61:22:decimal', stdlib.UInt_max, '2'), v90);
      sim_r.txns.push({
        kind: 'from',
        to: v89,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v102, v103], secs: v105, time: v104, didSend: v46, from: v101 } = txn2;
  ;
  const v108 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:61:22:decimal', stdlib.UInt_max, '2'), v90);
  ;
  const v126 = stdlib.add(v91, v102);
  stdlib.protect(ctc1, await interact.seeTotal(v126), {
    at: './index.rsh:68:26:application',
    fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:27:function exp)'],
    msg: 'seeTotal',
    who: 'Bob'
    });
  let v127;
  const v128 = stdlib.eq(v92, v103);
  if (v128) {
    v127 = stdlib.checkedBigNumberify('./index.rsh:47:29:decimal', stdlib.UInt_max, '1');
    }
  else {
    const v130 = stdlib.eq(v92, v126);
    if (v130) {
      v127 = stdlib.checkedBigNumberify('./index.rsh:50:29:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v132 = stdlib.eq(v103, v126);
      if (v132) {
        v127 = stdlib.checkedBigNumberify('./index.rsh:53:29:decimal', stdlib.UInt_max, '2');
        }
      else {
        v127 = stdlib.checkedBigNumberify('./index.rsh:56:29:decimal', stdlib.UInt_max, '1');
        }
      }
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v127), {
    at: './index.rsh:69:28:application',
    fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:27:function exp)'],
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
  appApproval: `BiAEAAEIAiYCAAEAIjUAMRhBASwoZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAFUjEkQjNAESRDQESSISTDQCEhFEKWRJNQOBIFs1/0k1BUkiWzX+JFs1/YAEx7YK1TT+FlA0/RZQsDT/iADfsSKyASU0/wuyCCOyEDQDVwAgsgezQgBaSIGgjQaIAL8iNAESRDQESSISTDQCEhFESTUFSUkiWzX/JFs1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsDT/iACFMQA0/xZQKUsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
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
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v92",
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
                "name": "v90",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v91",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v92",
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
                "name": "v102",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v103",
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
                "name": "v102",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v103",
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
  Bytecode: `0x60806040526040516107b13803806107b1833981016040819052610022916101f1565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a160208101515161009690341460076100f9565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100f19260029290910190610122565b5050506102be565b8161011e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461012e90610283565b90600052602060002090601f0160209004810192826101505760008555610196565b82601f1061016957805160ff1916838001178555610196565b82800160010185558215610196579182015b8281111561019657825182559160200191906001019061017b565b506101a29291506101a6565b5090565b5b808211156101a257600081556001016101a7565b604051606081016001600160401b03811182821017156101eb57634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303608081121561020457600080fd5b604080519081016001600160401b038111828210171561023457634e487b7160e01b600052604160045260246000fd5b604052835181526060601f198301121561024d57600080fd5b6102556101bb565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c9082168061029757607f821691505b602082108114156102b857634e487b7160e01b600052602260045260246000fd5b50919050565b6104e4806102cd6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f11461004957806342ae229d1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b366004610365565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa61024d565b60405161006492919061037d565b6100c860016000541460096102ea565b6100e2813515806100db57506001548235145b600a6102ea565b6000808055600280546100f4906103da565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103da565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b5050505050806020019051810190610185919061040f565b604080513381528435602080830191909152850135818301529084013560608201529091507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a16101e88160200151341460086102ea565b80600001516001600160a01b03166108fc8260200151600261020a9190610481565b6040518115909202916000818181858888f19350505050158015610232573d6000803e3d6000fd5b50600080805560018190556102499060029061030f565b5050565b600060606000546002808054610262906103da565b80601f016020809104026020016040519081016040528092919081815260200182805461028e906103da565b80156102db5780601f106102b0576101008083540402835291602001916102db565b820191906000526020600020905b8154815290600101906020018083116102be57829003601f168201915b50505050509050915091509091565b816102495760405163100960cb60e01b81526004810182905260240160405180910390fd5b50805461031b906103da565b6000825580601f1061032b575050565b601f016020900490600052602060002090810190610349919061034c565b50565b5b80821115610361576000815560010161034d565b5090565b60006060828403121561037757600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103b157858101830151858201606001528201610395565b818111156103c3576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103ee57607f821691505b6020821081141561037757634e487b7160e01b600052602260045260246000fd5b60006040828403121561042157600080fd5b6040516040810181811067ffffffffffffffff8211171561045257634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461046c57600080fd5b81526020928301519281019290925250919050565b60008160001904831182151516156104a957634e487b7160e01b600052601160045260246000fd5b50029056fea2646970667358221220c1a0045619975a98bfd2a9e58d7af9dc55e02a3c28b8a165e5bde0bd902c247364736f6c634300080c0033`,
  BytecodeLen: 1969,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:29:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:65:13:after expr stmt semicolon',
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
