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

/* .reveal のスクロール出現 */
(function(){
  if(!('IntersectionObserver' in window)){document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});return;}
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();
