// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

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
      7: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1]
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
  
  
  const v299 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v300 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v300, v299],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:56:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v300, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v304, v305], secs: v307, time: v306, didSend: v56, from: v303 } = txn1;
      
      sim_r.txns.push({
        amt: v304,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v316 = stdlib.safeAdd(v306, v305);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v304, v305], secs: v307, time: v306, didSend: v56, from: v303 } = txn1;
  ;
  const v316 = stdlib.safeAdd(v306, v305);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v316],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v303, v304, v305, v316],
      evt_cnt: 0,
      funcNum: 2,
      lct: v306,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v469, time: v468, didSend: v252, from: v467 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v303,
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
    const {data: [], secs: v469, time: v468, didSend: v252, from: v467 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:48:35:application',
      fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:67:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v322, time: v321, didSend: v65, from: v320 } = txn2;
    const v324 = stdlib.safeAdd(v304, v304);
    ;
    const v325 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:70:20:decimal', stdlib.UInt_max, '2'), v304);
    let v326 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v327 = v321;
    let v334 = v324;
    
    while (await (async () => {
      const v341 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v341;})()) {
      const v348 = stdlib.safeAdd(v327, v305);
      const v352 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:77:44:application',
        fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v353 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:78:58:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v354 = stdlib.digest(ctc1, [v353, v352]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v303, v305, v320, v325, v334, v348, v354],
        evt_cnt: 1,
        funcNum: 4,
        lct: v327,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:81:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v357], secs: v359, time: v358, didSend: v91, from: v356 } = txn3;
          
          ;
          const v367 = stdlib.safeAdd(v358, v305);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v348],
        tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v303, v305, v320, v325, v334, v348],
          evt_cnt: 0,
          funcNum: 5,
          lct: v327,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v436, time: v435, didSend: v206, from: v434 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v320,
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
        const {data: [], secs: v436, time: v435, didSend: v206, from: v434 } = txn4;
        ;
        const v437 = stdlib.addressEq(v303, v434);
        const v438 = stdlib.addressEq(v320, v434);
        const v439 = v437 ? true : v438;
        stdlib.assert(v439, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:82:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:48:35:application',
          fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:82:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v357], secs: v359, time: v358, didSend: v91, from: v356 } = txn3;
        ;
        const v360 = stdlib.addressEq(v303, v356);
        stdlib.assert(v360, {
          at: './index.rsh:81:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v367 = stdlib.safeAdd(v358, v305);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v367],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v303, v305, v320, v325, v334, v357, v367],
            evt_cnt: 0,
            funcNum: 7,
            lct: v358,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v418, time: v417, didSend: v172, from: v416 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v303,
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
            tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v418, time: v417, didSend: v172, from: v416 } = txn5;
          ;
          const v419 = stdlib.addressEq(v303, v416);
          const v420 = stdlib.addressEq(v320, v416);
          const v421 = v419 ? true : v420;
          stdlib.assert(v421, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:90:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:48:35:application',
            fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:90:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v373], secs: v375, time: v374, didSend: v101, from: v372 } = txn4;
          ;
          const v376 = stdlib.addressEq(v320, v372);
          stdlib.assert(v376, {
            at: './index.rsh:89:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v383 = stdlib.safeAdd(v374, v305);
          const txn5 = await (ctc.sendrecv({
            args: [v303, v305, v320, v325, v334, v357, v373, v383, v353, v352],
            evt_cnt: 2,
            funcNum: 8,
            lct: v374,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:97:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v388, v389], secs: v391, time: v390, didSend: v111, from: v387 } = txn5;
              
              ;
              const v395 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, '4'), v373);
              const v396 = stdlib.safeAdd(v389, v395);
              const v397 = stdlib.safeMod(v396, stdlib.checkedBigNumberify('./index.rsh:7:36:decimal', stdlib.UInt_max, '3'));
              const cv326 = v397;
              const cv327 = v390;
              const cv334 = v334;
              
              await (async () => {
                const v326 = cv326;
                const v327 = cv327;
                const v334 = cv334;
                
                if (await (async () => {
                  const v341 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v341;})()) {
                  const v348 = stdlib.safeAdd(v327, v305);
                  sim_r.isHalt = false;
                  }
                else {
                  const v452 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v456 = v452 ? v303 : v320;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v456,
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
            timeoutAt: ['time', v383],
            tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v303, v305, v320, v325, v334, v357, v373, v383],
              evt_cnt: 0,
              funcNum: 9,
              lct: v374,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v400, time: v399, didSend: v138, from: v398 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v320,
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
              tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v400, time: v399, didSend: v138, from: v398 } = txn6;
            ;
            const v401 = stdlib.addressEq(v303, v398);
            const v402 = stdlib.addressEq(v320, v398);
            const v403 = v401 ? true : v402;
            stdlib.assert(v403, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:98:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:48:35:application',
              fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:98:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v388, v389], secs: v391, time: v390, didSend: v111, from: v387 } = txn5;
            ;
            const v392 = stdlib.addressEq(v303, v387);
            stdlib.assert(v392, {
              at: './index.rsh:97:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v393 = stdlib.digest(ctc1, [v388, v389]);
            const v394 = stdlib.digestEq(v357, v393);
            stdlib.assert(v394, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:99:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v395 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, '4'), v373);
            const v396 = stdlib.safeAdd(v389, v395);
            const v397 = stdlib.safeMod(v396, stdlib.checkedBigNumberify('./index.rsh:7:36:decimal', stdlib.UInt_max, '3'));
            const cv326 = v397;
            const cv327 = v390;
            const cv334 = v334;
            
            v326 = cv326;
            v327 = cv327;
            v334 = cv334;
            
            continue;}
          
          }
        
        }
      
      }
    const v452 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v456 = v452 ? v303 : v320;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v326), {
      at: './index.rsh:110:24:application',
      fs: ['at ./index.rsh:109:5:application call to [unknown function] (defined at: ./index.rsh:109:23:function exp)'],
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
  const {data: [v304, v305], secs: v307, time: v306, didSend: v56, from: v303 } = txn1;
  ;
  const v316 = stdlib.safeAdd(v306, v305);
  stdlib.protect(ctc1, await interact.acceptWager(v304), {
    at: './index.rsh:63:29:application',
    fs: ['at ./index.rsh:62:13:application call to [unknown function] (defined at: ./index.rsh:62:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v303, v304, v305, v316],
    evt_cnt: 0,
    funcNum: 1,
    lct: v306,
    onlyIf: true,
    out_tys: [],
    pay: [v304, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v322, time: v321, didSend: v65, from: v320 } = txn2;
      
      const v324 = stdlib.safeAdd(v304, v304);
      sim_r.txns.push({
        amt: v304,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v325 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:70:20:decimal', stdlib.UInt_max, '2'), v304);
      const v326 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v327 = v321;
      const v334 = v324;
      
      if (await (async () => {
        const v341 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v341;})()) {
        const v348 = stdlib.safeAdd(v327, v305);
        sim_r.isHalt = false;
        }
      else {
        const v452 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v456 = v452 ? v303 : v320;
        sim_r.txns.push({
          kind: 'from',
          to: v456,
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
    timeoutAt: ['time', v316],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v303, v304, v305, v316],
      evt_cnt: 0,
      funcNum: 2,
      lct: v306,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v469, time: v468, didSend: v252, from: v467 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v303,
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
    const {data: [], secs: v469, time: v468, didSend: v252, from: v467 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:48:35:application',
      fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:67:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v322, time: v321, didSend: v65, from: v320 } = txn2;
    const v324 = stdlib.safeAdd(v304, v304);
    ;
    const v325 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:70:20:decimal', stdlib.UInt_max, '2'), v304);
    let v326 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v327 = v321;
    let v334 = v324;
    
    while (await (async () => {
      const v341 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v341;})()) {
      const v348 = stdlib.safeAdd(v327, v305);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v348],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v303, v305, v320, v325, v334, v348],
          evt_cnt: 0,
          funcNum: 5,
          lct: v327,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v436, time: v435, didSend: v206, from: v434 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v320,
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
        const {data: [], secs: v436, time: v435, didSend: v206, from: v434 } = txn4;
        ;
        const v437 = stdlib.addressEq(v303, v434);
        const v438 = stdlib.addressEq(v320, v434);
        const v439 = v437 ? true : v438;
        stdlib.assert(v439, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:82:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:48:35:application',
          fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:82:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v357], secs: v359, time: v358, didSend: v91, from: v356 } = txn3;
        ;
        const v360 = stdlib.addressEq(v303, v356);
        stdlib.assert(v360, {
          at: './index.rsh:81:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v367 = stdlib.safeAdd(v358, v305);
        const v371 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:87:52:application',
          fs: ['at ./index.rsh:86:13:application call to [unknown function] (defined at: ./index.rsh:86:17:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v303, v305, v320, v325, v334, v357, v367, v371],
          evt_cnt: 1,
          funcNum: 6,
          lct: v358,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:89:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v373], secs: v375, time: v374, didSend: v101, from: v372 } = txn4;
            
            ;
            const v383 = stdlib.safeAdd(v374, v305);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v367],
          tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v303, v305, v320, v325, v334, v357, v367],
            evt_cnt: 0,
            funcNum: 7,
            lct: v358,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v418, time: v417, didSend: v172, from: v416 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v303,
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
            tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v418, time: v417, didSend: v172, from: v416 } = txn5;
          ;
          const v419 = stdlib.addressEq(v303, v416);
          const v420 = stdlib.addressEq(v320, v416);
          const v421 = v419 ? true : v420;
          stdlib.assert(v421, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:90:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:48:35:application',
            fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:90:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v373], secs: v375, time: v374, didSend: v101, from: v372 } = txn4;
          ;
          const v376 = stdlib.addressEq(v320, v372);
          stdlib.assert(v376, {
            at: './index.rsh:89:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v383 = stdlib.safeAdd(v374, v305);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v383],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v303, v305, v320, v325, v334, v357, v373, v383],
              evt_cnt: 0,
              funcNum: 9,
              lct: v374,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v400, time: v399, didSend: v138, from: v398 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v320,
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
              tys: [ctc4, ctc0, ctc4, ctc0, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v400, time: v399, didSend: v138, from: v398 } = txn6;
            ;
            const v401 = stdlib.addressEq(v303, v398);
            const v402 = stdlib.addressEq(v320, v398);
            const v403 = v401 ? true : v402;
            stdlib.assert(v403, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:98:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:48:35:application',
              fs: ['at ./index.rsh:47:13:application call to [unknown function] (defined at: ./index.rsh:47:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:46:30:function exp)', 'at ./index.rsh:98:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v388, v389], secs: v391, time: v390, didSend: v111, from: v387 } = txn5;
            ;
            const v392 = stdlib.addressEq(v303, v387);
            stdlib.assert(v392, {
              at: './index.rsh:97:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v393 = stdlib.digest(ctc3, [v388, v389]);
            const v394 = stdlib.digestEq(v357, v393);
            stdlib.assert(v394, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:99:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v395 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, '4'), v373);
            const v396 = stdlib.safeAdd(v389, v395);
            const v397 = stdlib.safeMod(v396, stdlib.checkedBigNumberify('./index.rsh:7:36:decimal', stdlib.UInt_max, '3'));
            const cv326 = v397;
            const cv327 = v390;
            const cv334 = v334;
            
            v326 = cv326;
            v327 = cv327;
            v334 = cv334;
            
            continue;}
          
          }
        
        }
      
      }
    const v452 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v456 = v452 ? v303 : v320;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v326), {
      at: './index.rsh:110:24:application',
      fs: ['at ./index.rsh:109:5:application call to [unknown function] (defined at: ./index.rsh:109:23:function exp)'],
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
  appApproval: `BiAQAAFQBQkgCAcCSHiAAQQDWDAmAwEAAQEAIjUAMRhBBI8qZEkiWzUBIQZbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSUMQAIsSSEHDEABOEkhBgxAAN5JIQQMQABWIQQSRCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNXKCA1/4AEogVmjrAyBjQDIQtbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCA6dIIQQ0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/STUFSSJbNf4hBls1/YAENRoq0DT+FlA0/RZQsDIGNAMhC1sMRDT/MQASRDQDV1ggNP4WNP0WUAESRDT/NAMhBVs0A1coIDQDIQlbNP0hDDQDIQpbCQghDRgyBjQDJFtCAshIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhClsPRDT/MQASNANXKCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IC00mBBgxAAJdIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/IQVbNf5XKCA1/SEJWzX8JFs1+1dYIDX6STUFFzX5gARw7e96NPkWULAyBjQDIQpbDEQ0/TEAEkQyBjT+CDX4NP80/hZQNP1QNPwWUDT7FlA0+lA0+RZQNPgWUChLAVcAf2cpSwFXfwlnSCEENQEyBjUCQgJQSCU0ARJENARJIhJMNAISEUQoZEk1A1coIDX/gATMmZJcsDIGNAMhDlsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IB5kkhCAxAANBJIQwMQACISCU0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQVbNf5XKCA1/SEJWzX8JFs1+0k1BTX6gAQ4sCMtNPpQsDIGNAMhDlsMRDT/MQASRDIGNP4INfk0/zT+FlA0/VA0/BZQNPsWUDT6UDT5FlAoSwFXAH9nKUsBV38BZ0ghBzUBMgY1AkIBayEIEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ9bD0SxIrIBNAMhBVuyCCOyEDQDVwAgsgezQgEPSSMMQABLSCM0ARJENARJIhJMNAISEUQoZEk1AyEFWzX/gASai5F0sDIGNAMhD1sMRDT/iAFGNANXACA0A4EoWzEAIQg0/wsjMgY0/0kIQgBgSIGgjQaIASMiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBls1/oAErNEfwzT/FlA0/hZQsDT/iADyMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB5Nf81/jX9Nfw1+zX6Nfk0/SMSQQAuNP40+gg1+DT5NPoWUDT7UDT8FlA0/xZQNPgWUChLAVcAYGdIJTUBMgY1AkIANrEisgE0/LIII7IQNPs0+TT9IQgSTbIHs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCENMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
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
                "name": "v304",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v305",
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
                "name": "v304",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v305",
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
                "name": "v357",
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
                "name": "v373",
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
                "name": "v388",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v389",
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
                "name": "v357",
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
                "name": "v373",
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
                "name": "v388",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v389",
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
  Bytecode: `0x608060405260405162001d1638038062001d168339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611999806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063980b6eac14610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631e93b0f1146100a35780632c10a159146100c75780637eea518c146100da57806383230757146100ed5780638328d4c41461010257005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d536600461152a565b610197565b6100a16100e836600461152a565b61033e565b3480156100f957600080fd5b506001546100b4565b6100a1610110366004611546565b6104bc565b6100a161012336600461152a565b6106ec565b6100a161013636600461152a565b610887565b6100a161014936600461152a565b610b24565b34801561015a57600080fd5b50610163610d63565b6040516100be929190611558565b6100a161017f36600461152a565b610e00565b6100a161019236600461152a565b610f97565b6101a760016000541460096110ed565b6101c1813515806101ba57506001548235145b600a6110ed565b6000808055600280546101d3906115b5565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906115b5565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611606565b905061027781606001514310600b6110ed565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516102a892919061167f565b60405180910390a16102c18160200151341460086110ed565b6102c96113e3565b815181516001600160a01b039091169052604080830151825160209081019190915282513392019190915282015161030390600290611113565b81516060015260208082018051600190525143908201528201516103279080611178565b602082015160400152610339816111c5565b505050565b61034e600160005414600d6110ed565b6103688135158061036157506001548235145b600e6110ed565b60008080556002805461037a906115b5565b80601f01602080910402602001604051908101604052809291908181526020018280546103a6906115b5565b80156103f35780601f106103c8576101008083540402835291602001916103f3565b820191906000526020600020905b8154815290600101906020018083116103d657829003601f168201915b505050505080602001905181019061040b9190611606565b905061041f8160600151431015600f6110ed565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161045092919061167f565b60405180910390a16104643415600c6110ed565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104a1573d6000803e3d6000fd5b50600080805560018190556104b89060029061143c565b5050565b6104cc60096000541460276110ed565b6104e6813515806104df57506001548235145b60286110ed565b6000808055600280546104f8906115b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610524906115b5565b80156105715780601f1061054657610100808354040283529160200191610571565b820191906000526020600020905b81548152906001019060200180831161055457829003601f168201915b505050505080602001905181019061058991906116bc565b905061059c8160e00151431060296110ed565b604080513381528335602080830191909152840135818301529083013560608201527f71b5093cb50f6a6c807d17b0994efe213c21a3f7fc6bd14bf50facf7ea99022e9060800160405180910390a16105f7341560246110ed565b805161060f906001600160a01b0316331460256110ed565b6040805161065b9161063591602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260a001511460266110ed565b6106636113e3565b815181516001600160a01b039182169052602080840151835190910152604080840151835192169181019190915260608084015183519091015260c08301516106c7916106c09190860135906106bb90600490611346565b611178565b6003611395565b60208083018051929092528151439101526080830151905160400152610339816111c5565b6106fc60056000541460176110ed565b6107168135158061070f57506001548235145b60186110ed565b600080805560028054610728906115b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610754906115b5565b80156107a15780601f10610776576101008083540402835291602001916107a1565b820191906000526020600020905b81548152906001019060200180831161078457829003601f168201915b50505050508060200190518101906107b99190611768565b90506107cd8160a0015143101560196110ed565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516107fe92919061167f565b60405180910390a1610812341560156110ed565b8051610846906001600160a01b0316331461083c5760408201516001600160a01b0316331461083f565b60015b60166110ed565b80604001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156104a1573d6000803e3d6000fd5b610897600760005414601c6110ed565b6108b1813515806108aa57506001548235145b601d6110ed565b6000808055600280546108c3906115b5565b80601f01602080910402602001604051908101604052809291908181526020018280546108ef906115b5565b801561093c5780601f106109115761010080835404028352916020019161093c565b820191906000526020600020905b81548152906001019060200180831161091f57829003601f168201915b505050505080602001905181019061095491906117fc565b905061096c6040518060200160405280600081525090565b61097d8260c001514310601e6110ed565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33846040516109ae92919061189a565b60405180910390a16109c23415601a6110ed565b60408201516109dd906001600160a01b03163314601b6110ed565b6109eb438360200151611178565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015190921682840152606080860151908401526080808601519084015260a080860151908401528581013560c0840152835160e08401526009600055436001559051610af99183910160006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b60405160208183030381529060405260029080519060200190610b1d929190611479565b5050505050565b610b3460056000541460126110ed565b610b4e81351580610b4757506001548235145b60136110ed565b600080805560028054610b60906115b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8c906115b5565b8015610bd95780601f10610bae57610100808354040283529160200191610bd9565b820191906000526020600020905b815481529060010190602001808311610bbc57829003601f168201915b5050505050806020019051810190610bf19190611768565b9050610c096040518060200160405280600081525090565b610c1a8260a00151431060146110ed565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610c4b92919061189a565b60405180910390a1610c5f341560106110ed565b8151610c77906001600160a01b0316331460116110ed565b610c85438360200151611178565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b0390811680835260208086015181850190815260408088015185168187019081526060808a01518189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a01979097529451909916928701929092525190850152945190830152925191810191909152905160e082015261010001610af9565b600060606000546002808054610d78906115b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610da4906115b5565b8015610df15780601f10610dc657610100808354040283529160200191610df1565b820191906000526020600020905b815481529060010190602001808311610dd457829003601f168201915b50505050509050915091509091565b610e1060076000541460216110ed565b610e2a81351580610e2357506001548235145b60226110ed565b600080805560028054610e3c906115b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610e68906115b5565b8015610eb55780601f10610e8a57610100808354040283529160200191610eb5565b820191906000526020600020905b815481529060010190602001808311610e9857829003601f168201915b5050505050806020019051810190610ecd91906117fc565b9050610ee18160c0015143101560236110ed565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610f1292919061167f565b60405180910390a1610f263415601f6110ed565b8051610f5a906001600160a01b03163314610f505760408201516001600160a01b03163314610f53565b60015b60206110ed565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104a1573d6000803e3d6000fd5b610fa7600960005414602c6110ed565b610fc181351580610fba57506001548235145b602d6110ed565b600080805560028054610fd3906115b5565b80601f0160208091040260200160405190810160405280929190818152602001828054610fff906115b5565b801561104c5780601f106110215761010080835404028352916020019161104c565b820191906000526020600020905b81548152906001019060200180831161102f57829003601f168201915b505050505080602001905181019061106491906116bc565b90506110788160e00151431015602e6110ed565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd33836040516110a992919061167f565b60405180910390a16110bd3415602a6110ed565b8051610846906001600160a01b031633146110e75760408201516001600160a01b031633146110ea565b60015b602b5b816104b85760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008115806111375750828261112981836118d7565b9250611135908361190c565b145b6111725760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b604482015260640161110a565b92915050565b6000826111858382611920565b91508110156111725760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161110a565b604080516020810190915260008152602082015151600114156112ed576111fc826020015160200151836000015160200151611178565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015185168187019081528851606090810151818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a52965195880195909552925190971690850152945190830152925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906112e7929190611479565b50505050565b60208201515160021461130557815160400151611309565b8151515b8251606001516040516001600160a01b03929092169181156108fc0291906000818181858888f193505050501580156104a1573d6000803e3d6000fd5b6000826113538382611938565b91508111156111725760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b604482015260640161110a565b6000816113d25760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b604482015260640161110a565b6113dc828461194f565b9392505050565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161143760405180606001604052806000815260200160008152602001600081525090565b905290565b508054611448906115b5565b6000825580601f10611458575050565b601f01602090049060005260206000209081019061147691906114fd565b50565b828054611485906115b5565b90600052602060002090601f0160209004810192826114a757600085556114ed565b82601f106114c057805160ff19168380011785556114ed565b828001600101855582156114ed579182015b828111156114ed5782518255916020019190600101906114d2565b506114f99291506114fd565b5090565b5b808211156114f957600081556001016114fe565b60006040828403121561152457600080fd5b50919050565b60006040828403121561153c57600080fd5b6113dc8383611512565b60006060828403121561152457600080fd5b82815260006020604081840152835180604085015260005b8181101561158c57858101830151858201606001528201611570565b8181111561159e576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806115c957607f821691505b6020821081141561152457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461160157600080fd5b919050565b60006080828403121561161857600080fd5b6040516080810181811067ffffffffffffffff8211171561164957634e487b7160e01b600052604160045260246000fd5b604052611655836115ea565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146116ad57600080fd5b80604085015250509392505050565b60006101008083850312156116d057600080fd5b6040519081019067ffffffffffffffff8211818310171561170157634e487b7160e01b600052604160045260246000fd5b8160405261170e846115ea565b815260208401516020820152611726604085016115ea565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b600060c0828403121561177a57600080fd5b60405160c0810181811067ffffffffffffffff821117156117ab57634e487b7160e01b600052604160045260246000fd5b6040526117b7836115ea565b8152602083015160208201526117cf604084016115ea565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600060e0828403121561180e57600080fd5b60405160e0810181811067ffffffffffffffff8211171561183f57634e487b7160e01b600052604160045260246000fd5b60405261184b836115ea565b815260208301516020820152611863604084016115ea565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152606081016113dc602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156118f1576118f16118c1565b500290565b634e487b7160e01b600052601260045260246000fd5b60008261191b5761191b6118f6565b500490565b60008219821115611933576119336118c1565b500190565b60008282101561194a5761194a6118c1565b500390565b60008261195e5761195e6118f6565b50069056fea264697066735822122008222551771c46b394daa384d43276da9363c94c3364b2f3ded853797b9431e564736f6c634300080c0033`,
  BytecodeLen: 7446,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:57:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:67:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:107:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:74:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:82:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:83:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:90:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:91:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:98:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
