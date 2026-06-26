/* ============================================
   Firebase Config — Obfuscated
   ============================================
   HOW TO SETUP:
   1. Go to Firebase Console > Project Settings > Your apps > Web app
   2. Copy the firebaseConfig object
   3. Encode it: btoa(JSON.stringify(firebaseConfig))
   4. Replace the string in _k below
   ============================================ */
(function(){
  // Base64-encoded Firebase config — replace with your own
  var _k="fSJLS1lRTUZXUFEzLUciOiJkSXRuZW1lcnVzYWVtIiwiYzU0MWIxNjMyNTg3MTNjZDdmM2FkNjpiZXc6NzE1ODc5MjQ4MzM3OjEiOiJkSXBwYSIsIjcxNTg3OTI0ODMzNyI6ImRJcmVkbmVTZ25pZ2Fzc2VtIiwicHBhLmVnYXJvdHNlc2FiZXJpZi5vcmthbS1pbW9ub2tlLW5hZC1vdHBpcmstc2l1ayI6InRla2N1QmVnYXJvdHMiLCJvcmthbS1pbW9ub2tlLW5hZC1vdHBpcmstc2l1ayI6ImRJdGNlam9ycCIsIm1vYy5wcGFlc2FiZXJpZi5vcmthbS1pbW9ub2tlLW5hZC1vdHBpcmstc2l1ayI6Im5pYW1vRGh0dWEiLCJJbjZvWlRGOXJEM0YzLWhCOUtyZUxkNFFMV0tqdlFDMER5U2F6SUEiOiJ5ZUtpcGEiew==";
  try{
    var _c=atob(_k);
    var _p=_c.split('').reverse().join('');
    var _j='';
    for(var _i=0;_i<_p.length;_i++){
      _j+=String.fromCharCode(_p.charCodeAt(_i)^0);
    }
    var cfg=JSON.parse(_j);
    firebase.initializeApp(cfg);
    var _db=firebase.firestore();
    // Dedup: keep latest-timestamp entry per username
    function _dedup(entries){
      var map={};
      entries.forEach(function(e){
        var u=e.data.username;
        var prev=map[u];
        if(!prev){map[u]=e;return;}
        var t1=prev.data.timestamp?prev.data.timestamp.toMillis?prev.data.timestamp.toMillis():0:0;
        var t2=e.data.timestamp?e.data.timestamp.toMillis?e.data.timestamp.toMillis():0:0;
        if(t2>t1||(t2===t1&&e.data.score>prev.data.score)){map[u]=e;}
      });
      return Object.keys(map).map(function(k){return map[k];});
    }
    window._db={
      saveScore:function(u,s,g){
        var uname=String(u).substring(0,30);
        var docId=uname.replace(/\s+/g,'_').replace(/[^a-zA-Z0-9_.\-]/g,'');
        return _db.collection('leaderboard').doc(docId).set({
          username:uname,
          score:Math.max(0,parseInt(s)||0),
          grade:String(g).charAt(0),
          timestamp:firebase.firestore.FieldValue.serverTimestamp()
        }).then(function(){
          console.log('[Firestore] saveScore OK, doc:', docId);
        });
      },
      getLeaderboard:function(){
        return _db.collection('leaderboard')
          .orderBy('score','desc')
          .limit(20)
          .get();
      },
      onLeaderboard:function(cb){
        return _db.collection('leaderboard')
          .orderBy('score','desc')
          .limit(20)
          .onSnapshot(function(snap){
            var d=[];
            snap.forEach(function(doc){d.push({id:doc.id,data:doc.data()});});
            d=_dedup(d);
            console.log('[Firestore] onSnapshot received', d.length, 'docs (after dedup)');
            cb(d);
          },function(err){
            console.error('[Firestore] onSnapshot error:', err);
            cb([]);
          });
      }
    };
  }catch(e){
    window._db={
      saveScore:function(){return Promise.resolve();},
      getLeaderboard:function(){return Promise.resolve({docs:[]});},
      onLeaderboard:function(cb){cb([]);return function(){};}
    };
  }
})();
