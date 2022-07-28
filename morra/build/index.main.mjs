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
      1: [ctc0, ctc1, ctc1, ctc1]
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
  
  
  const v136 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v139 = stdlib.protect(ctc0, await interact.throwHand(), {
    at: './index.rsh:78:56:application',
    fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
    msg: 'throwHand',
    who: 'Alice'
    });
  const v140 = stdlib.protect(ctc0, await interact.guessTotal(), {
    at: './index.rsh:79:58:application',
    fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
    msg: 'guessTotal',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v136, v139, v140],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:81:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v136, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v142, v143, v144], secs: v146, time: v145, didSend: v33, from: v141 } = txn1;
      
      sim_r.txns.push({
        amt: v142,
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
  const {data: [v142, v143, v144], secs: v146, time: v145, didSend: v33, from: v141 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v154, v155], secs: v157, time: v156, didSend: v46, from: v153 } = txn2;
  ;
  let v160;
  const v161 = stdlib.eq(v144, v155);
  if (v161) {
    v160 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    }
  else {
    const v162 = stdlib.add(v143, v154);
    const v163 = stdlib.eq(v144, v162);
    if (v163) {
      v160 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      }
    else {
      const v165 = stdlib.eq(v155, v162);
      if (v165) {
        v160 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        }
      else {
        v160 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      }
    }
  const v166 = stdlib.eq(v160, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v167 = stdlib.eq(v160, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v168 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v169 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v170 = v167 ? v168 : v169;
  const v171 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v172 = v166 ? v171 : v170;
  const v173 = v172[stdlib.checkedBigNumberify('./index.rsh:97:24:array', stdlib.UInt_max, '0')];
  const v174 = v172[stdlib.checkedBigNumberify('./index.rsh:97:24:array', stdlib.UInt_max, '1')];
  const v175 = stdlib.mul(v173, v142);
  ;
  const v180 = stdlib.mul(v174, v142);
  ;
  const v189 = stdlib.add(v143, v154);
  stdlib.protect(ctc1, await interact.seeTotal(v189), {
    at: './index.rsh:107:26:application',
    fs: ['at ./index.rsh:106:9:application call to [unknown function] (defined at: ./index.rsh:106:27:function exp)'],
    msg: 'seeTotal',
    who: 'Alice'
    });
  let v190;
  if (v161) {
    v190 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    }
  else {
    const v193 = stdlib.eq(v144, v189);
    if (v193) {
      v190 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      }
    else {
      const v195 = stdlib.eq(v155, v189);
      if (v195) {
        v190 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        }
      else {
        v190 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      }
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v190), {
    at: './index.rsh:108:28:application',
    fs: ['at ./index.rsh:106:9:application call to [unknown function] (defined at: ./index.rsh:106:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  let v196;
  const v198 = stdlib.eq(v144, v189);
  const v200 = stdlib.eq(v155, v189);
  const v201 = v200 ? false : true;
  const v202 = v198 ? v201 : false;
  if (v202) {
    v196 = stdlib.checkedBigNumberify('./index.rsh:32:28:decimal', stdlib.UInt_max, '1');
    }
  else {
    v196 = stdlib.checkedBigNumberify('./index.rsh:35:28:decimal', stdlib.UInt_max, '0');
    }
  stdlib.protect(ctc1, await interact.seeScoreAlice(v196), {
    at: './index.rsh:109:31:application',
    fs: ['at ./index.rsh:106:9:application call to [unknown function] (defined at: ./index.rsh:106:27:function exp)'],
    msg: 'seeScoreAlice',
    who: 'Alice'
    });
  let v203;
  const v208 = v198 ? false : true;
  const v209 = v200 ? v208 : false;
  if (v209) {
    v203 = stdlib.checkedBigNumberify('./index.rsh:42:26:decimal', stdlib.UInt_max, '1');
    }
  else {
    v203 = stdlib.checkedBigNumberify('./index.rsh:45:26:decimal', stdlib.UInt_max, '0');
    }
  stdlib.protect(ctc1, await interact.seeScoreBob(v203), {
    at: './index.rsh:110:29:application',
    fs: ['at ./index.rsh:106:9:application call to [unknown function] (defined at: ./index.rsh:106:27:function exp)'],
    msg: 'seeScoreBob',
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
  const {data: [v142, v143, v144], secs: v146, time: v145, didSend: v33, from: v141 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v142), {
    at: './index.rsh:85:29:application',
    fs: ['at ./index.rsh:84:13:application call to [unknown function] (defined at: ./index.rsh:84:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v151 = stdlib.protect(ctc0, await interact.throwHand(), {
    at: './index.rsh:86:54:application',
    fs: ['at ./index.rsh:84:13:application call to [unknown function] (defined at: ./index.rsh:84:17:function exp)'],
    msg: 'throwHand',
    who: 'Bob'
    });
  const v152 = stdlib.protect(ctc0, await interact.guessTotal(), {
    at: './index.rsh:87:56:application',
    fs: ['at ./index.rsh:84:13:application call to [unknown function] (defined at: ./index.rsh:84:17:function exp)'],
    msg: 'guessTotal',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v141, v142, v143, v144, v151, v152],
    evt_cnt: 2,
    funcNum: 1,
    lct: v145,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v142, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v154, v155], secs: v157, time: v156, didSend: v46, from: v153 } = txn2;
      
      sim_r.txns.push({
        amt: v142,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      let v160;
      const v161 = stdlib.eq(v144, v155);
      if (v161) {
        v160 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      else {
        const v162 = stdlib.add(v143, v154);
        const v163 = stdlib.eq(v144, v162);
        if (v163) {
          v160 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
          }
        else {
          const v165 = stdlib.eq(v155, v162);
          if (v165) {
            v160 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
            }
          else {
            v160 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          }
        }
      const v166 = stdlib.eq(v160, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v167 = stdlib.eq(v160, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v168 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v169 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v170 = v167 ? v168 : v169;
      const v171 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v172 = v166 ? v171 : v170;
      const v173 = v172[stdlib.checkedBigNumberify('./index.rsh:97:24:array', stdlib.UInt_max, '0')];
      const v174 = v172[stdlib.checkedBigNumberify('./index.rsh:97:24:array', stdlib.UInt_max, '1')];
      const v175 = stdlib.mul(v173, v142);
      sim_r.txns.push({
        kind: 'from',
        to: v141,
        tok: undefined /* Nothing */
        });
      const v180 = stdlib.mul(v174, v142);
      sim_r.txns.push({
        kind: 'from',
        to: v153,
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
    tys: [ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v154, v155], secs: v157, time: v156, didSend: v46, from: v153 } = txn2;
  ;
  let v160;
  const v161 = stdlib.eq(v144, v155);
  if (v161) {
    v160 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    }
  else {
    const v162 = stdlib.add(v143, v154);
    const v163 = stdlib.eq(v144, v162);
    if (v163) {
      v160 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      }
    else {
      const v165 = stdlib.eq(v155, v162);
      if (v165) {
        v160 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        }
      else {
        v160 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      }
    }
  const v166 = stdlib.eq(v160, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v167 = stdlib.eq(v160, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v168 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v169 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v170 = v167 ? v168 : v169;
  const v171 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v172 = v166 ? v171 : v170;
  const v173 = v172[stdlib.checkedBigNumberify('./index.rsh:97:24:array', stdlib.UInt_max, '0')];
  const v174 = v172[stdlib.checkedBigNumberify('./index.rsh:97:24:array', stdlib.UInt_max, '1')];
  const v175 = stdlib.mul(v173, v142);
  ;
  const v180 = stdlib.mul(v174, v142);
  ;
  const v212 = stdlib.add(v143, v154);
  stdlib.protect(ctc1, await interact.seeTotal(v212), {
    at: './index.rsh:107:26:application',
    fs: ['at ./index.rsh:106:9:application call to [unknown function] (defined at: ./index.rsh:106:27:function exp)'],
    msg: 'seeTotal',
    who: 'Bob'
    });
  let v213;
  if (v161) {
    v213 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    }
  else {
    const v216 = stdlib.eq(v144, v212);
    if (v216) {
      v213 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      }
    else {
      const v218 = stdlib.eq(v155, v212);
      if (v218) {
        v213 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        }
      else {
        v213 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        }
      }
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v213), {
    at: './index.rsh:108:28:application',
    fs: ['at ./index.rsh:106:9:application call to [unknown function] (defined at: ./index.rsh:106:27:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  let v219;
  const v221 = stdlib.eq(v144, v212);
  const v223 = stdlib.eq(v155, v212);
  const v224 = v223 ? false : true;
  const v225 = v221 ? v224 : false;
  if (v225) {
    v219 = stdlib.checkedBigNumberify('./index.rsh:32:28:decimal', stdlib.UInt_max, '1');
    }
  else {
    v219 = stdlib.checkedBigNumberify('./index.rsh:35:28:decimal', stdlib.UInt_max, '0');
    }
  stdlib.protect(ctc1, await interact.seeScoreAlice(v219), {
    at: './index.rsh:109:31:application',
    fs: ['at ./index.rsh:106:9:application call to [unknown function] (defined at: ./index.rsh:106:27:function exp)'],
    msg: 'seeScoreAlice',
    who: 'Bob'
    });
  let v226;
  const v231 = v221 ? false : true;
  const v232 = v223 ? v231 : false;
  if (v232) {
    v226 = stdlib.checkedBigNumberify('./index.rsh:42:26:decimal', stdlib.UInt_max, '1');
    }
  else {
    v226 = stdlib.checkedBigNumberify('./index.rsh:45:26:decimal', stdlib.UInt_max, '0');
    }
  stdlib.protect(ctc1, await interact.seeScoreBob(v226), {
    at: './index.rsh:110:29:application',
    fs: ['at ./index.rsh:106:9:application call to [unknown function] (defined at: ./index.rsh:106:27:function exp)'],
    msg: 'seeScoreBob',
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
  appApproval: `BiAEAAEIAiYCAAEAIjUAMRhBAcsoZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAOwjEkQjNAESRDQESSISTDQCEhFEKWRJNQNJgSBbNf+BMFs1/kk1BUkiWzX9JFs1/IAEx7YK1TT9FlA0/BZQsDT/iAF4NP40/BJBAAYjNftCACk0A4EoWzT9CDX6NP40+hJBAAYiNftCABE0/DT6EkEABiU1+0IAAyM1+4AQAAAAAAAAAAEAAAAAAAAAAYAQAAAAAAAAAAAAAAAAAAAAAjT7JRJNgBAAAAAAAAAAAgAAAAAAAAAANPsiEk01+rEisgE0+iJbNP8LsggjshA0A1cAILIHs7EisgE0+iRbNP8LsggjshAxALIHs0IAYkiBoI0GiADHIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yRbNf6BEFs1/YAE93ETTTT/FlA0/hZQNP0WULA0/4gAjTEANP8WUDT+FlA0/RZQKUsBVwA4Z0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 56,
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
                "name": "v142",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v144",
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
                "name": "v142",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v143",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v144",
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
                "name": "v154",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v155",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
                "name": "v154",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v155",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
  Bytecode: `0x6080604052604051610a03380380610a0383398101604081905261002291610243565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a1602081015151610096903414600761014b565b6100ca604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a090930190528151610143926002920190610174565b505050610310565b816101705760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054610180906102d5565b90600052602060002090601f0160209004810192826101a257600085556101e8565b82601f106101bb57805160ff19168380011785556101e8565b828001600101855582156101e8579182015b828111156101e85782518255916020019190600101906101cd565b506101f49291506101f8565b5090565b5b808211156101f457600081556001016101f9565b604051606081016001600160401b038111828210171561023d57634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303608081121561025657600080fd5b604080519081016001600160401b038111828210171561028657634e487b7160e01b600052604160045260246000fd5b604052835181526060601f198301121561029f57600080fd5b6102a761020d565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806102e957607f821691505b6020821081141561030a57634e487b7160e01b600052602260045260246000fd5b50919050565b6106e48061031f6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f11461004957806342ae229d1461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b36600461052e565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa610371565b604051610064929190610546565b6100c8600160005414600961040e565b6100e2813515806100db57506001548235145b600a61040e565b6000808055600280546100f4906105a3565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906105a3565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906105d8565b905061018f610437565b604080513381528435602080830191909152850135818301529084013560608201527f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd939060800160405180910390a16101ef82602001513414600861040e565b6060820151604084013514156102085760018152610255565b604082015161021c90602085013590610677565b60208201819052606083015114156102375760008152610255565b6020810151604084013514156102505760028152610255565b600181525b6040810180516000908190529051600260209182018190526060840180516001908190529051830152608084018051919091525101528051156102af5780516002146102a55780606001516102b5565b80604001516102b5565b80608001515b60a082018190528251602084015191516001600160a01b03909116916108fc916102df919061068f565b6040518115909202916000818181858888f19350505050158015610307573d6000803e3d6000fd5b50336001600160a01b03166108fc83602001518360a001516020015161032d919061068f565b6040518115909202916000818181858888f19350505050158015610355573d6000803e3d6000fd5b506000808055600181905561036c906002906104d8565b505050565b600060606000546002808054610386906105a3565b80601f01602080910402602001604051908101604052809291908181526020018280546103b2906105a3565b80156103ff5780601f106103d4576101008083540402835291602001916103ff565b820191906000526020600020905b8154815290600101906020018083116103e257829003601f168201915b50505050509050915091509091565b816104335760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060c00160405280600081526020016000815260200161046d604051806040016040528060008152602001600081525090565b815260200161048f604051806040016040528060008152602001600081525090565b81526020016104b1604051806040016040528060008152602001600081525090565b81526020016104d3604051806040016040528060008152602001600081525090565b905290565b5080546104e4906105a3565b6000825580601f106104f4575050565b601f0160209004906000526020600020908101906105129190610515565b50565b5b8082111561052a5760008155600101610516565b5090565b60006060828403121561054057600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561057a5785810183015185820160600152820161055e565b8181111561058c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806105b757607f821691505b6020821081141561054057634e487b7160e01b600052602260045260246000fd5b6000608082840312156105ea57600080fd5b6040516080810181811067ffffffffffffffff8211171561061b57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461063557600080fd5b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561068a5761068a610661565b500190565b60008160001904831182151516156106a9576106a9610661565b50029056fea26469706673582212203c936fafda97c7de82b52b5dbae09b2ae3675df72307d1f8421e0bde05ef947664736f6c634300080c0033`,
  BytecodeLen: 2563,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:82:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:104:13:after expr stmt semicolon',
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
