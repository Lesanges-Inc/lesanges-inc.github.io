/* 金の羽根が舞い落ちる(prefers-reduced-motion対応) */
(function(){
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var box = document.querySelector('.petals'); if(!box) return;
  var svg = '<svg width="W" height="W" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.5C9.5 7.5 5 11 3.5 18.5c4.2-1.2 8-3.4 9.8-7.2-.7 3.8-1.6 6.9-.6 10.9 4.6-5.9 8.6-10.8 7.8-18.4-2.9 1-5.7 2.1-7.7 4.7.1-2.3.2-4.6.2-7z"/></svg>';
  for(var i=0;i<10;i++){
    var p = document.createElement('span');
    p.className = 'petal';
    var w = Math.round(13 + Math.random()*18);
    p.innerHTML = svg.replace(/"W"/g, '"'+w+'"');
    p.style.left = (Math.random()*96) + '%';
    p.style.animationDuration = (16 + Math.random()*16) + 's';
    p.style.animationDelay = (-Math.random()*24) + 's';
    p.style.opacity = (0.12 + Math.random()*0.2).toFixed(2);
    box.appendChild(p);
  }
})();

/* 携帯のメニュー開閉。リンクを押す・外側を押す・Escで閉じる */
(function(){
  var btn = document.querySelector('.gnav-toggle');
  var menu = document.getElementById('gnav-menu');
  if(!btn || !menu) return;

  function set(open){
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  }
  btn.addEventListener('click', function(e){
    e.stopPropagation();
    set(!menu.classList.contains('open'));
  });
  menu.addEventListener('click', function(e){
    if(e.target.closest('a')) set(false);
  });
  document.addEventListener('click', function(e){
    if(menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) set(false);
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && menu.classList.contains('open')){ set(false); btn.focus(); }
  });
  /* 横向きにしてPC幅になったときに開いたままにしない */
  window.addEventListener('resize', function(){
    if(window.innerWidth > 820) set(false);
  });
})();

/* 動きを減らす設定の端末では、ヒーロー動画を止めてポスター画像だけを見せる */
(function(){
  var v = document.querySelector('.hero-media video');
  if(!v) return;
  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  function apply(){
    if(mq.matches){ v.pause(); v.removeAttribute('autoplay'); }
    else { var p = v.play(); if(p && p.catch) p.catch(function(){}); }
  }
  apply();
  if(mq.addEventListener) mq.addEventListener('change', apply);
})();

/* システム画面リール: 画面幅が埋まるまで並べ、全体を2周分に複製して継ぎ目のない無限スクロールにする。
   画像を足すときは index.html の .reel-track に <figure class="reel-item"> を追記するだけでよい */
(function(){
  var reels = [];
  document.querySelectorAll('.reel-track').forEach(function(track){
    var base = Array.prototype.slice.call(track.children).map(function(el){ return el.cloneNode(true); });
    if(base.length) reels.push({ track:track, base:base });
  });
  if(!reels.length) return;

  function append(r, el, hidden){
    var node = el.cloneNode(true);
    if(hidden){
      node.setAttribute('aria-hidden','true');
      var img = node.querySelector('img');
      if(img) img.setAttribute('alt','');
    }
    r.track.appendChild(node);
  }

  function build(r){
    var box = r.track.parentElement;
    r.track.textContent = '';
    r.base.forEach(function(el){ append(r, el, false); });
    // 1周分がコンテナ幅を超えるまでセットを足す(右端に空白が出ないように)
    var guard = 0;
    while(r.track.scrollWidth < box.clientWidth && guard++ < 12){
      r.base.forEach(function(el){ append(r, el, true); });
    }
    // いまの並びをもう一度繰り返して2周分にする(-50%でちょうど1周)
    var count = r.track.children.length;
    for(var i = 0; i < count; i++){ append(r, r.track.children[i], true); }
    // 枚数が増えても流れる速さが変わらないように、幅から再生時間を出す(約26px/秒)
    r.track.style.animationDuration = Math.max(20, Math.round(r.track.scrollWidth / 2 / 26)) + 's';
  }

  reels.forEach(build);
  window.addEventListener('load', function(){ reels.forEach(build); });
  var timer;
  window.addEventListener('resize', function(){
    clearTimeout(timer);
    timer = setTimeout(function(){ reels.forEach(build); }, 250);
  });
})();

/* .reveal のスクロール出現 */
(function(){
  if(!('IntersectionObserver' in window)){document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});return;}
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();
