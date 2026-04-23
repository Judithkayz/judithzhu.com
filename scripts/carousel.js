(function(){
  'use strict';

  /* ── DOM refs ── */
  const nav     = document.getElementById('nav');
  const trigger = document.getElementById('navTrigger');
  const label   = document.getElementById('triggerLabel');
  const overlay = document.getElementById('overlay');

  let isOpen = false, scrollY = 0;

  /* ── Scroll state ── */
  function onScroll(){
    nav.classList.toggle('scrolled', window.scrollY > 40 && !isOpen);
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ── Toggle overlay ── */
  function openMenu(){
    isOpen = true;
    scrollY = window.scrollY;
    document.body.style.cssText = `overflow:hidden;position:fixed;top:-${scrollY}px;left:0;right:0;`;
    nav.classList.add('menu-open');
    nav.classList.remove('scrolled');
    overlay.classList.add('open');
    trigger.setAttribute('aria-expanded','true');
    label.textContent = 'Close';
    const first = overlay.querySelector('.ov-link');
    if(first) setTimeout(()=>first.focus(), 580);
  }
  function closeMenu(){
    isOpen = false;
    document.body.style.cssText = '';
    window.scrollTo(0, scrollY);
    nav.classList.remove('menu-open');
    overlay.classList.remove('open');
    trigger.setAttribute('aria-expanded','false');
    label.textContent = 'Menu';
    onScroll();
    trigger.focus();
  }
  trigger.addEventListener('click', ()=> isOpen ? closeMenu() : openMenu());
  document.addEventListener('keydown', e => { if(e.key==='Escape' && isOpen) closeMenu(); });

  /* ── Sub-page routing ── */
  window.openSub = function(e, id){
    e.preventDefault();
    closeMenu();
    if(id==='home'){ goHome(e); return; }
    setTimeout(()=>{
      document.body.classList.add('sub-active');
      document.querySelectorAll('.sub').forEach(s=>s.classList.remove('active'));
      const target = document.getElementById('sub-'+id);
      if(target){ target.classList.add('active'); window.scrollTo(0,0); }
    }, isOpen ? 350 : 0);
  };

  window.goHome = function(e){
    e.preventDefault();
    document.body.classList.remove('sub-active');
    document.querySelectorAll('.sub').forEach(s=>s.classList.remove('active'));
    window.scrollTo(0,0);
    onScroll();
  };

  /* ── Menu day tabs ── */
  window.switchDay = function(n){
    [1,2,3].forEach(i=>{
      const el = document.getElementById('day-'+i);
      if(el) el.style.display = i===n ? 'block' : 'none';
    });
    document.querySelectorAll('.day-tab').forEach((t,i)=>{
      t.classList.toggle('active', i+1===n);
    });
  };

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); });
  },{threshold:0.1});
  reveals.forEach(el=>obs.observe(el));

  /* ── Focus trap in overlay ── */
  overlay.addEventListener('keydown', e=>{
    if(!isOpen || e.key!=='Tab') return;
    const focusable = overlay.querySelectorAll('a,button,[tabindex]:not([tabindex="-1"])');
    const first = focusable[0], last = focusable[focusable.length-1];
    if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
  });

  /* ── Photo Carousel ── */
  var chslState = {};

  function chslInit(id) {
    if (!chslState[id]) {
      var slides = document.querySelectorAll('#carousel-' + id + ' .chsl-slide');
      chslState[id] = { idx: 0, total: slides.length };
    }
  }

  window.chslGo = function(id, n) {
    chslInit(id);
    var s = chslState[id];
    var slides = document.querySelectorAll('#carousel-' + id + ' .chsl-slide');
    var dots   = document.querySelectorAll('#chsl-' + id + '-dots .chsl-dot');
    slides[s.idx].style.display = 'none';
    dots[s.idx].classList.remove('chsl-dot-active');
    s.idx = (n + s.total) % s.total;
    slides[s.idx].style.display = 'block';
    dots[s.idx].classList.add('chsl-dot-active');
  };

  window.chslMove = function(id, dir) {
    chslInit(id);
    chslGo(id, chslState[id].idx + dir);
  };

  /* Keyboard nav for carousels */
  document.addEventListener('keydown', function(e) {
    var acc = document.getElementById('sub-accommodation');
    if (!acc || !acc.classList.contains('active')) return;
    if (e.key === 'ArrowLeft')  { chslMove('outside', -1); chslMove('inside', -1); }
    if (e.key === 'ArrowRight') { chslMove('outside',  1); chslMove('inside',  1); }
  });

})();

  /* ── Judith carousel ── */
  var jcIdx = 0;
  function jcGo(n) {
    jcIdx = (n + 3) % 3;
    var slides = document.querySelector('#judith-carousel .jc-slides');
    var carouselW = (document.querySelector('#judith-carousel') || {}).offsetWidth || 160;
    if (slides) slides.style.transform = 'translateX(-' + (jcIdx * carouselW) + 'px)';
    document.querySelectorAll('.jcd').forEach(function(d, i) {
      d.style.background = i === jcIdx ? 'rgba(138,96,48,0.9)' : 'rgba(138,96,48,0.3)';
    });
  }
  function jcNext() { jcGo(jcIdx + 1); }
  function jcPrev() { jcGo(jcIdx - 1); }
  // Auto-advance
  setInterval(function(){ if (document.body.classList.contains('sub-active')) jcNext(); }, 3800);
