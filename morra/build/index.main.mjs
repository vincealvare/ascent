// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
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
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
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
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v341 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v342 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v342, v341],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:139:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v342, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v346, v347], secs: v349, time: v348, didSend: v73, from: v345 } = txn1;
      
      sim_r.txns.push({
        amt: v346,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v358 = stdlib.add(v348, v347);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v346, v347], secs: v349, time: v348, didSend: v73, from: v345 } = txn1;
  ;
  const v358 = stdlib.add(v348, v347);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v358],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v345, v346, v347, v358],
      evt_cnt: 0,
      funcNum: 2,
      lct: v348,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v525, time: v524, didSend: v284, from: v523 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v345,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v525, time: v524, didSend: v284, from: v523 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:131:35:application',
      fs: ['at ./index.rsh:130:13:application call to [unknown function] (defined at: ./index.rsh:130:31:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:129:30:function exp)', 'at ./index.rsh:146:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v364, time: v363, didSend: v82, from: v362 } = txn2;
    const v366 = stdlib.add(v346, v346);
    ;
    const v367 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:149:24:decimal', stdlib.UInt_max, '2'), v346);
    let v368 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v369 = v363;
    let v376 = v366;
    
    while (await (async () => {
      const v383 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v383;})()) {
      const v390 = stdlib.add(v369, v347);
      const v394 = stdlib.protect(ctc0, await interact.throwHand(), {
        at: './index.rsh:157:50:application',
        fs: ['at ./index.rsh:156:19:application call to [unknown function] (defined at: ./index.rsh:156:23:function exp)'],
        msg: 'throwHand',
        who: 'Alice'
        });
      const v395 = stdlib.protect(ctc0, await interact.guessTotal(), {
        at: './index.rsh:158:52:application',
        fs: ['at ./index.rsh:156:19:application call to [unknown function] (defined at: ./index.rsh:156:23:function exp)'],
        msg: 'guessTotal',
        who: 'Alice'
        });
      const v396 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:159:70:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:156:19:application call to [unknown function] (defined at: ./index.rsh:156:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v397 = stdlib.digest(ctc1, [v396, v394]);
      const v399 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:160:72:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:156:19:application call to [unknown function] (defined at: ./index.rsh:156:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v400 = stdlib.digest(ctc1, [v399, v395]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v345, v347, v362, v367, v376, v390, v397, v400],
        evt_cnt: 2,
        funcNum: 4,
        lct: v369,
        onlyIf: true,
        out_tys: [ctc2, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:164:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v403, v404], secs: v406, time: v405, didSend: v114, from: v402 } = txn3;
          
          ;
          const v414 = stdlib.add(v405, v347);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v390],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v345, v347, v362, v367, v376, v390],
          evt_cnt: 0,
          funcNum: 5,
          lct: v369,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v492, time: v491, didSend: v238, from: v490 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v362,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v492, time: v491, didSend: v238, from: v490 } = txn4;
        ;
        const v493 = stdlib.addressEq(v345, v490);
        const v494 = stdlib.addressEq(v362, v490);
        const v495 = v493 ? true : v494;
        stdlib.assert(v495, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:165:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:131:35:application',
          fs: ['at ./index.rsh:130:13:application call to [unknown function] (defined at: ./index.rsh:130:31:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:129:30:function exp)', 'at ./index.rsh:165:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v403, v404], secs: v406, time: v405, didSend: v114, from: v402 } = txn3;
        ;
        const v407 = stdlib.addressEq(v345, v402);
        stdlib.assert(v407, {
          at: './index.rsh:164:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v414 = stdlib.add(v405, v347);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v414],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v345, v347, v362, v367, v376, v403, v404, v414],
            evt_cnt: 0,
            funcNum: 7,
            lct: v405,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v474, time: v473, didSend: v204, from: v472 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v345,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v474, time: v473, didSend: v204, from: v472 } = txn5;
          ;
          const v475 = stdlib.addressEq(v345, v472);
          const v476 = stdlib.addressEq(v362, v472);
          const v477 = v475 ? true : v476;
          stdlib.assert(v477, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:175:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:131:35:application',
            fs: ['at ./index.rsh:130:13:application call to [unknown function] (defined at: ./index.rsh:130:31:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:129:30:function exp)', 'at ./index.rsh:175:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v421, v422], secs: v424, time: v423, didSend: v126, from: v420 } = txn4;
          ;
          const v425 = stdlib.addressEq(v362, v420);
          stdlib.assert(v425, {
            at: './index.rsh:174:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v432 = stdlib.add(v423, v347);
          const txn5 = await (ctc.sendrecv({
            args: [v345, v347, v362, v367, v376, v403, v404, v421, v422, v432, v394, v395, v396, v399],
            evt_cnt: 4,
            funcNum: 8,
            lct: v423,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:184:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v437, v438, v439, v440], secs: v442, time: v441, didSend: v138, from: v436 } = txn5;
              
              ;
              let v448;
              const v449 = stdlib.eq(v438, v422);
              if (v449) {
                v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v450 = stdlib.add(v437, v421);
                const v451 = stdlib.eq(v438, v450);
                if (v451) {
                  v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  const v453 = stdlib.eq(v422, v450);
                  if (v453) {
                    v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const cv368 = v448;
              const cv369 = v441;
              const cv376 = v376;
              
              await (async () => {
                const v368 = cv368;
                const v369 = cv369;
                const v376 = cv376;
                
                if (await (async () => {
                  const v383 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v383;})()) {
                  const v390 = stdlib.add(v369, v347);
                  sim_r.isHalt = false;
                  }
                else {
                  const v508 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  const v512 = v508 ? v345 : v362;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v512,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v432],
            tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v345, v347, v362, v367, v376, v403, v404, v421, v422, v432],
              evt_cnt: 0,
              funcNum: 9,
              lct: v423,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v456, time: v455, didSend: v170, from: v454 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v362,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v456, time: v455, didSend: v170, from: v454 } = txn6;
            ;
            const v457 = stdlib.addressEq(v345, v454);
            const v458 = stdlib.addressEq(v362, v454);
            const v459 = v457 ? true : v458;
            stdlib.assert(v459, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:185:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:131:35:application',
              fs: ['at ./index.rsh:130:13:application call to [unknown function] (defined at: ./index.rsh:130:31:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:129:30:function exp)', 'at ./index.rsh:185:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v437, v438, v439, v440], secs: v442, time: v441, didSend: v138, from: v436 } = txn5;
            ;
            const v443 = stdlib.addressEq(v345, v436);
            stdlib.assert(v443, {
              at: './index.rsh:184:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v444 = stdlib.digest(ctc1, [v439, v437]);
            const v445 = stdlib.digestEq(v403, v444);
            stdlib.assert(v445, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:186:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v446 = stdlib.digest(ctc1, [v440, v438]);
            const v447 = stdlib.digestEq(v404, v446);
            stdlib.assert(v447, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:187:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            let v448;
            const v449 = stdlib.eq(v438, v422);
            if (v449) {
              v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v450 = stdlib.add(v437, v421);
              const v451 = stdlib.eq(v438, v450);
              if (v451) {
                v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                const v453 = stdlib.eq(v422, v450);
                if (v453) {
                  v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const cv368 = v448;
            const cv369 = v441;
            const cv376 = v376;
            
            v368 = cv368;
            v369 = cv369;
            v376 = cv376;
            
            continue;}
          
          }
        
        }
      
      }
    const v508 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v512 = v508 ? v345 : v362;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v368), {
      at: './index.rsh:216:28:application',
      fs: ['at ./index.rsh:215:9:application call to [unknown function] (defined at: ./index.rsh:215:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
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
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v346, v347], secs: v349, time: v348, didSend: v73, from: v345 } = txn1;
  ;
  const v358 = stdlib.add(v348, v347);
  stdlib.protect(ctc1, await interact.acceptWager(v346), {
    at: './index.rsh:143:29:application',
    fs: ['at ./index.rsh:142:13:application call to [unknown function] (defined at: ./index.rsh:142:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v345, v346, v347, v358],
    evt_cnt: 0,
    funcNum: 1,
    lct: v348,
    onlyIf: true,
    out_tys: [],
    pay: [v346, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v364, time: v363, didSend: v82, from: v362 } = txn2;
      
      const v366 = stdlib.add(v346, v346);
      sim_r.txns.push({
        amt: v346,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v367 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:149:24:decimal', stdlib.UInt_max, '2'), v346);
      const v368 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v369 = v363;
      const v376 = v366;
      
      if (await (async () => {
        const v383 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v383;})()) {
        const v390 = stdlib.add(v369, v347);
        sim_r.isHalt = false;
        }
      else {
        const v508 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v512 = v508 ? v345 : v362;
        sim_r.txns.push({
          kind: 'from',
          to: v512,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v358],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v345, v346, v347, v358],
      evt_cnt: 0,
      funcNum: 2,
      lct: v348,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v525, time: v524, didSend: v284, from: v523 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v345,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v525, time: v524, didSend: v284, from: v523 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:131:35:application',
      fs: ['at ./index.rsh:130:13:application call to [unknown function] (defined at: ./index.rsh:130:31:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:129:30:function exp)', 'at ./index.rsh:146:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v364, time: v363, didSend: v82, from: v362 } = txn2;
    const v366 = stdlib.add(v346, v346);
    ;
    const v367 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:149:24:decimal', stdlib.UInt_max, '2'), v346);
    let v368 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v369 = v363;
    let v376 = v366;
    
    while (await (async () => {
      const v383 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v383;})()) {
      const v390 = stdlib.add(v369, v347);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v390],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v345, v347, v362, v367, v376, v390],
          evt_cnt: 0,
          funcNum: 5,
          lct: v369,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v492, time: v491, didSend: v238, from: v490 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v362,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v492, time: v491, didSend: v238, from: v490 } = txn4;
        ;
        const v493 = stdlib.addressEq(v345, v490);
        const v494 = stdlib.addressEq(v362, v490);
        const v495 = v493 ? true : v494;
        stdlib.assert(v495, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:165:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:131:35:application',
          fs: ['at ./index.rsh:130:13:application call to [unknown function] (defined at: ./index.rsh:130:31:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:129:30:function exp)', 'at ./index.rsh:165:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v403, v404], secs: v406, time: v405, didSend: v114, from: v402 } = txn3;
        ;
        const v407 = stdlib.addressEq(v345, v402);
        stdlib.assert(v407, {
          at: './index.rsh:164:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v414 = stdlib.add(v405, v347);
        const v418 = stdlib.protect(ctc0, await interact.throwHand(), {
          at: './index.rsh:171:58:application',
          fs: ['at ./index.rsh:170:17:application call to [unknown function] (defined at: ./index.rsh:170:21:function exp)'],
          msg: 'throwHand',
          who: 'Bob'
          });
        const v419 = stdlib.protect(ctc0, await interact.guessTotal(), {
          at: './index.rsh:172:60:application',
          fs: ['at ./index.rsh:170:17:application call to [unknown function] (defined at: ./index.rsh:170:21:function exp)'],
          msg: 'guessTotal',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v345, v347, v362, v367, v376, v403, v404, v414, v418, v419],
          evt_cnt: 2,
          funcNum: 6,
          lct: v405,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:174:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v421, v422], secs: v424, time: v423, didSend: v126, from: v420 } = txn4;
            
            ;
            const v432 = stdlib.add(v423, v347);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v414],
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v345, v347, v362, v367, v376, v403, v404, v414],
            evt_cnt: 0,
            funcNum: 7,
            lct: v405,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v474, time: v473, didSend: v204, from: v472 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v345,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v474, time: v473, didSend: v204, from: v472 } = txn5;
          ;
          const v475 = stdlib.addressEq(v345, v472);
          const v476 = stdlib.addressEq(v362, v472);
          const v477 = v475 ? true : v476;
          stdlib.assert(v477, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:175:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:131:35:application',
            fs: ['at ./index.rsh:130:13:application call to [unknown function] (defined at: ./index.rsh:130:31:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:129:30:function exp)', 'at ./index.rsh:175:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v421, v422], secs: v424, time: v423, didSend: v126, from: v420 } = txn4;
          ;
          const v425 = stdlib.addressEq(v362, v420);
          stdlib.assert(v425, {
            at: './index.rsh:174:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v432 = stdlib.add(v423, v347);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v432],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v345, v347, v362, v367, v376, v403, v404, v421, v422, v432],
              evt_cnt: 0,
              funcNum: 9,
              lct: v423,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v456, time: v455, didSend: v170, from: v454 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v362,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v456, time: v455, didSend: v170, from: v454 } = txn6;
            ;
            const v457 = stdlib.addressEq(v345, v454);
            const v458 = stdlib.addressEq(v362, v454);
            const v459 = v457 ? true : v458;
            stdlib.assert(v459, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:185:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:131:35:application',
              fs: ['at ./index.rsh:130:13:application call to [unknown function] (defined at: ./index.rsh:130:31:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:129:30:function exp)', 'at ./index.rsh:185:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v437, v438, v439, v440], secs: v442, time: v441, didSend: v138, from: v436 } = txn5;
            ;
            const v443 = stdlib.addressEq(v345, v436);
            stdlib.assert(v443, {
              at: './index.rsh:184:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v444 = stdlib.digest(ctc3, [v439, v437]);
            const v445 = stdlib.digestEq(v403, v444);
            stdlib.assert(v445, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:186:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v446 = stdlib.digest(ctc3, [v440, v438]);
            const v447 = stdlib.digestEq(v404, v446);
            stdlib.assert(v447, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:187:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            let v448;
            const v449 = stdlib.eq(v438, v422);
            if (v449) {
              v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v450 = stdlib.add(v437, v421);
              const v451 = stdlib.eq(v438, v450);
              if (v451) {
                v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                const v453 = stdlib.eq(v422, v450);
                if (v453) {
                  v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v448 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const cv368 = v448;
            const cv369 = v441;
            const cv376 = v376;
            
            v368 = cv368;
            v369 = cv369;
            v376 = cv376;
            
            continue;}
          
          }
        
        }
      
      }
    const v508 = stdlib.eq(v368, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v512 = v508 ? v345 : v362;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v368), {
      at: './index.rsh:216:28:application',
      fs: ['at ./index.rsh:215:9:application call to [unknown function] (defined at: ./index.rsh:215:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAFQCAUJIAcCmAFIqAFYMCYDAQABAQAiNQAxGEEFCipkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAApdJIQcMQAGLSSUMQAEySSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVyggNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgQiSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf+BoAFbNf5JNQVJSiJbNf0lWzX8gRBbNfuBGFs1+oAEf6I7UjT9FlA0/BZQNPsWUDT6FlCwMgY0AyELWwxENP8xABJENANXWCA0+xY0/RZQARJENANXeCA0+hY0/BZQARJENPw0/hJBAAYjNflCACo0/TQDIQlbCDX4NPw0+BJBAAYiNflCABI0/jT4EkEAByEINflCAAMjNfk0/zQDIQZbNANXKCA0AyEKWzT5MgY0AyRbQgLvSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AE4huzqbAyBjQDIQlbD0Q0/zEAEjQDVyggMQASEUSxIrIBNAMkW7III7IQNP+yB7NCAvpJgQYMQACuSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8hBls1/lcoIDX9IQpbNfwkWzX7V1ggNfpXeCA1+Uk1BUkiWzX4JVs194AESiHL/DT4FlA09xZQsDIGNAMhCVsMRDT9MQASRDIGNP4INfY0/zT+FlA0/VA0/BZQNPsWUDT6UDT5UDT4FlA09xZQNPYWUChLAVcAf2cpSwFXfzFnSCEFNQEyBjUCQgJhSCEENAESRDQESSISTDQCEhFEKGRJNQNXKCA1/4AEzJmSXLAyBjQDIQxbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCAfVJIQgMQADgSYEEDEAAmEghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBls1/lcoIDX9IQpbNfwkWzX7STUFSVcAIDX6VyAgNfmABGBdpCs0+lA0+VCwMgY0AyEMWwxENP8xABJEMgY0/gg1+DT/NP4WUDT9UDT8FlA0+xZQNPpQNPlQNPgWUChLAVcAf2cpSwFXfyFnSCEHNQEyBjUCQgFrIQgSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDVsPRLEisgE0AyEGW7III7IQNANXACCyB7NCAQ5JIwxAAEtIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQZbNf+ABJqLkXSwMgY0AyENWwxENP+IAUY0A1cAIDQDgShbMQAhCDT/CyMyBjT/SQhCAF9IgaCNBogBIyI0ARJENARJIhJMNAISEURJNQVJIls1/yVbNf6ABKzRH8M0/xZQNP4WULA0/4gA8zIGNP4INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIAejX/Nf41/TX8Nfs1+jX5NP0jEkEALzT+NPoINfg0+TT6FlA0+1A0/BZQNP8WUDT4FlAoSwFXAGBnSCEENQEyBjUCQgA2sSKyATT8sggjshA0+zT5NP0iEk2yB7NCAAAxGSEEEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
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
                "name": "v346",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v347",
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
                "name": "v346",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v347",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
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
                "name": "v437",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v438",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v439",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
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
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
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
                "name": "v421",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v422",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
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
                "name": "v437",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v438",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v439",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v440",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001ca238038062001ca283398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b611983806200031f6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611490565b610197565b6100a16100e83660046114b3565b6103fa565b6100a16100fb3660046114b3565b6105a0565b34801561010c57600080fd5b506001546100b4565b6100a16101233660046114b3565b61071e565b34801561013457600080fd5b5061013d6108b9565b6040516100be9291906114c5565b6100a16101593660046114b3565b610956565b6100a161016c366004611522565b610aed565b6100a161017f3660046114b3565b610ddf565b6100a1610192366004611490565b610f3a565b6101a7600760005414601c6111a9565b6101c1813515806101ba57506001548235145b601d6111a9565b6000808055600280546101d390611534565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611534565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b505050505080602001905181019061026491906115bd565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e6111a9565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be929190611669565b60405180910390a16102d23415601a6111a9565b60408201516102ed906001600160a01b03163314601b6111a9565b60208201516102fc90436116b0565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103cf918391016116c8565b604051602081830303815290604052600290805190602001906103f3929190611349565b5050505050565b61040a60016000541460096111a9565b6104248135158061041d57506001548235145b600a6111a9565b60008080556002805461043690611534565b80601f016020809104026020016040519081016040528092919081815260200182805461046290611534565b80156104af5780601f10610484576101008083540402835291602001916104af565b820191906000526020600020905b81548152906001019060200180831161049257829003601f168201915b50505050508060200190518101906104c7919061174f565b90506104da81606001514310600b6111a9565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050b9291906117c8565b60405180910390a16105248160200151341460086111a9565b61052c6113cd565b815181516001600160a01b0390911690526040808301518251602090810191909152825133920191909152820151610565906002611805565b815160600152602080820180516001905251439082015282015161058990806116b0565b60208201516040015261059b816111ce565b505050565b6105b0600160005414600d6111a9565b6105ca813515806105c357506001548235145b600e6111a9565b6000808055600280546105dc90611534565b80601f016020809104026020016040519081016040528092919081815260200182805461060890611534565b80156106555780601f1061062a57610100808354040283529160200191610655565b820191906000526020600020905b81548152906001019060200180831161063857829003601f168201915b505050505080602001905181019061066d919061174f565b90506106818160600151431015600f6111a9565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106b29291906117c8565b60405180910390a16106c63415600c6111a9565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610703573d6000803e3d6000fd5b506000808055600181905561071a90600290611426565b5050565b61072e60056000541460176111a9565b6107488135158061074157506001548235145b60186111a9565b60008080556002805461075a90611534565b80601f016020809104026020016040519081016040528092919081815260200182805461078690611534565b80156107d35780601f106107a8576101008083540402835291602001916107d3565b820191906000526020600020905b8154815290600101906020018083116107b657829003601f168201915b50505050508060200190518101906107eb9190611824565b90506107ff8160a0015143101560196111a9565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516108309291906117c8565b60405180910390a1610844341560156111a9565b8051610878906001600160a01b0316331461086e5760408201516001600160a01b03163314610871565b60015b60166111a9565b80604001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610703573d6000803e3d6000fd5b6000606060005460028080546108ce90611534565b80601f01602080910402602001604051908101604052809291908181526020018280546108fa90611534565b80156109475780601f1061091c57610100808354040283529160200191610947565b820191906000526020600020905b81548152906001019060200180831161092a57829003601f168201915b50505050509050915091509091565b61096660076000541460216111a9565b6109808135158061097957506001548235145b60226111a9565b60008080556002805461099290611534565b80601f01602080910402602001604051908101604052809291908181526020018280546109be90611534565b8015610a0b5780601f106109e057610100808354040283529160200191610a0b565b820191906000526020600020905b8154815290600101906020018083116109ee57829003601f168201915b5050505050806020019051810190610a2391906115bd565b9050610a378160e0015143101560236111a9565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a689291906117c8565b60405180910390a1610a7c3415601f6111a9565b8051610ab0906001600160a01b03163314610aa65760408201516001600160a01b03163314610aa9565b60015b60206111a9565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610703573d6000803e3d6000fd5b610afd60096000541460286111a9565b610b1781351580610b1057506001548235145b60296111a9565b600080805560028054610b2990611534565b80601f0160208091040260200160405190810160405280929190818152602001828054610b5590611534565b8015610ba25780601f10610b7757610100808354040283529160200191610ba2565b820191906000526020600020905b815481529060010190602001808311610b8557829003601f168201915b5050505050806020019051810190610bba91906118b8565b9050610bd9604051806040016040528060008152602001600081525090565b610beb8261012001514310602a6111a9565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c5e341560246111a9565b8151610c76906001600160a01b0316331460256111a9565b604051610cc390610c9d906060860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460266111a9565b60408051608085013560208201528482013591810191909152610d09906060016040516020818303038152906040528051906020012060001c8360c001511460276111a9565b61010082015160408401351415610d235760018152610d70565b60e0820151610d369060208501356116b0565b6020820181905260408401351415610d515760008152610d70565b80602001518261010001511415610d6b5760028152610d70565b600181525b610d786113cd565b825181516001600160a01b0391821690526020808501518351820152604080860151845193169281019290925260608086015184519091015283518184018051919091528051439201919091526080850151905190910152610dd9816111ce565b50505050565b610def600960005414602d6111a9565b610e0981351580610e0257506001548235145b602e6111a9565b600080805560028054610e1b90611534565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4790611534565b8015610e945780601f10610e6957610100808354040283529160200191610e94565b820191906000526020600020905b815481529060010190602001808311610e7757829003601f168201915b5050505050806020019051810190610eac91906118b8565b9050610ec1816101200151431015602f6111a9565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610ef29291906117c8565b60405180910390a1610f063415602b6111a9565b8051610878906001600160a01b03163314610f305760408201516001600160a01b03163314610f33565b60015b602c6111a9565b610f4a60056000541460126111a9565b610f6481351580610f5d57506001548235145b60136111a9565b600080805560028054610f7690611534565b80601f0160208091040260200160405190810160405280929190818152602001828054610fa290611534565b8015610fef5780601f10610fc457610100808354040283529160200191610fef565b820191906000526020600020905b815481529060010190602001808311610fd257829003601f168201915b50505050508060200190518101906110079190611824565b905061101f6040518060200160405280600081525090565b6110308260a00151431060146111a9565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051611061929190611669565b60405180910390a1611075341560106111a9565b815161108d906001600160a01b0316331460116111a9565b602082015161109c90436116b0565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601519092168284015260608086015190840152608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103cf9183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b8161071a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b604080516020810190915260008152602082015151600114156112f25781600001516020015182602001516020015161120791906116b0565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015185168187019081528851606090810151818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a52965195880195909552925190971690850152945190830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610dd9929190611349565b602082015151156113085781516040015161130c565b8151515b8251606001516040516001600160a01b03929092169181156108fc0291906000818181858888f19350505050158015610703573d6000803e3d6000fd5b82805461135590611534565b90600052602060002090601f01602090048101928261137757600085556113bd565b82601f1061139057805160ff19168380011785556113bd565b828001600101855582156113bd579182015b828111156113bd5782518255916020019190600101906113a2565b506113c9929150611463565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161142160405180606001604052806000815260200160008152602001600081525090565b905290565b50805461143290611534565b6000825580601f10611442575050565b601f0160209004906000526020600020908101906114609190611463565b50565b5b808211156113c95760008155600101611464565b60006060828403121561148a57600080fd5b50919050565b6000606082840312156114a257600080fd5b6114ac8383611478565b9392505050565b60006040828403121561148a57600080fd5b82815260006020604081840152835180604085015260005b818110156114f9578581018301518582016060015282016114dd565b8181111561150b576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561148a57600080fd5b600181811c9082168061154857607f821691505b6020821081141561148a57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561159b57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146115b857600080fd5b919050565b60006101008083850312156115d157600080fd5b6040519081019067ffffffffffffffff8211818310171561160257634e487b7160e01b600052604160045260246000fd5b8160405261160f846115a1565b815260208401516020820152611627604085016115a1565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b0383168152608081016114ac60208301848035825260208082013590830152604090810135910152565b634e487b7160e01b600052601160045260246000fd5b600082198211156116c3576116c361169a565b500190565b81516001600160a01b0316815261014081016020830151602083015260408301516116fe60408401826001600160a01b03169052565b50606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b60006080828403121561176157600080fd5b6040516080810181811067ffffffffffffffff8211171561179257634e487b7160e01b600052604160045260246000fd5b60405261179e836115a1565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146117f657600080fd5b80604085015250509392505050565b600081600019048311821515161561181f5761181f61169a565b500290565b600060c0828403121561183657600080fd5b60405160c0810181811067ffffffffffffffff8211171561186757634e487b7160e01b600052604160045260246000fd5b604052611873836115a1565b81526020830151602082015261188b604084016115a1565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600061014082840312156118cb57600080fd5b6118d3611569565b6118dc836115a1565b8152602083015160208201526118f4604084016115a1565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e0820152610100808401518183015250610120808401518183015250809150509291505056fea26469706673582212202135ac03dcc6e2a383c1a4cd6ed0d8278c9e25bcb6590f9bd103d77f5850753564736f6c634300080c0033`,
  BytecodeLen: 7330,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:140:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:146:55:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:211:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:154:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:165:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:166:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:175:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:176:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:185:59:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
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
