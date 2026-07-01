// KMK Dachy - interaktywność (nav mobilne + reveal + galeria-lightbox) + licznik otwarć
(function () {
  // ---- NAV mobilne ----
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  var nav = document.getElementById('nav');
  var backdrop = document.createElement('div');
  backdrop.className = 'nav-backdrop';
  document.body.appendChild(backdrop);
  function closeMenu(){ links.classList.remove('open'); toggle.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); backdrop.classList.remove('show'); }
  function openMenu(){ links.classList.add('open'); toggle.classList.add('open'); toggle.setAttribute('aria-expanded','true'); backdrop.classList.add('show'); }
  if (toggle) toggle.addEventListener('click', function(){ links.classList.contains('open') ? closeMenu() : openMenu(); });
  backdrop.addEventListener('click', closeMenu);
  if (links) links.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeMenu); });

  // ---- cień navbara po przewinięciu ----
  function onScroll(){ if (window.scrollY > 10) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); }
  window.addEventListener('scroll', onScroll, { passive:true }); onScroll();

  // ---- reveal on scroll ----
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold:.12, rootMargin:'0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }

  // ---- galeria lightbox ----
  var lb = document.getElementById('lightbox');
  if (lb) {
    var lbImg = document.getElementById('lbImg');
    var lbCap = document.getElementById('lbCap');
    var tiles = [].slice.call(document.querySelectorAll('.gallery .tile'));
    var idx = 0;
    function show(i){ idx = (i + tiles.length) % tiles.length; var t = tiles[idx]; lbImg.src = t.getAttribute('href'); lbImg.alt = t.getAttribute('data-cap') || ''; lbCap.textContent = t.getAttribute('data-cap') || ''; }
    function openLb(i){ show(i); lb.classList.add('open'); lb.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; }
    function closeLb(){ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }
    tiles.forEach(function(t,i){ t.addEventListener('click', function(ev){ ev.preventDefault(); openLb(i); }); });
    document.getElementById('lbClose').addEventListener('click', closeLb);
    document.getElementById('lbPrev').addEventListener('click', function(){ show(idx-1); });
    document.getElementById('lbNext').addEventListener('click', function(){ show(idx+1); });
    lb.addEventListener('click', function(e){ if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', function(e){
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') show(idx-1);
      if (e.key === 'ArrowRight') show(idx+1);
    });
  }
})();

// ---- licznik otwarć (demo_views) - NIE ruszać ----
(function(){try{if(String(location.protocol).indexOf('http')!==0)return;try{if(/[?&#]team=1/.test(location.search+location.hash)){localStorage.setItem('nb_team','1');}}catch(e){}try{if(localStorage.getItem('nb_team')==='1')return;}catch(e){}if((document.referrer||'').indexOf('crm-newbeginning')>-1)return;if(sessionStorage.getItem('_dv'))return;sessionStorage.setItem('_dv','1');var seg=(location.pathname.split('/').filter(Boolean)[0])||'';var base=location.origin+(seg?('/'+seg):'');var ua='';try{ua=(navigator.userAgent||'').slice(0,300);}catch(e){}var EP='https://zngfubfinbojfgaxdrbf.supabase.co/rest/v1/demo_views';var KEY='sb_publishable_MWwoyGlSCWnJ4awtOPF0ow_ZVS0Y8qK';function send(g){try{fetch(EP,{method:'POST',keepalive:true,headers:{'Content-Type':'application/json','apikey':KEY,'Authorization':'Bearer '+KEY,'Prefer':'return=minimal'},body:JSON.stringify({demo_url:base,page:location.pathname,referrer:(document.referrer||null),user_agent:(ua||null),ip:(g&&g.ip)||null,country:(g&&g.cc)||null,city:(g&&g.city)||null})}).catch(function(){});}catch(e){}}var done=false;function once(g){if(done)return;done=true;send(g);}try{var t=setTimeout(function(){once(null);},1500);fetch('https://ipwho.is/?fields=ip,success,country_code,city',{cache:'no-store'}).then(function(r){return r.json();}).then(function(d){clearTimeout(t);once(d&&d.success!==false?{ip:d.ip,cc:d.country_code,city:d.city}:null);}).catch(function(){clearTimeout(t);once(null);});}catch(e){once(null);}}catch(e){}})();
