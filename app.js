// Intro splash
const intro = document.getElementById('intro');
const enterBtn = document.getElementById('enterBtn');
if (intro && enterBtn) {
  const hideIntro = () => intro.classList.add('is-hidden');
  // Mostro pagina e poi chiudo splash
  enterBtn.addEventListener('click', hideIntro);
  setTimeout(hideIntro, 1600);
}

// ===== Scroll-to-top con anello progresso =====
const toTop = document.getElementById('toTop');

// Calcola progress anello e visibilità
function updateScrollFab(){
  const scrolled = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? scrolled / max : 0;
  if (toTop){
    // 0..360deg
    toTop.style.setProperty('--p', `${Math.min(360, Math.max(0, pct*360))}deg`);
    // mostra dopo 240px
    if (scrolled > 240) toTop.classList.add('is-visible');
    else toTop.classList.remove('is-visible');
  }
}
window.addEventListener('scroll', updateScrollFab, { passive: true });
window.addEventListener('resize', updateScrollFab);
updateScrollFab();

// Smooth scroll to top
toTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Drawer mobile
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const closeDrawer = document.getElementById('closeDrawer');
const backdrop = document.getElementById('backdrop');
function openMenu(){ drawer.classList.add('open'); backdrop.hidden = false; drawer.setAttribute('aria-hidden','false'); }
function closeMenu(){ drawer.classList.remove('open'); backdrop.hidden = true; drawer.setAttribute('aria-hidden','true'); }
hamburger?.addEventListener('click', openMenu);
closeDrawer?.addEventListener('click', closeMenu);
backdrop?.addEventListener('click', closeMenu);
document.querySelectorAll('.drawer-link').forEach(a => a.addEventListener('click', closeMenu));

// Scroll reveal (heavy ma performante)
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Year
document.getElementById('year').textContent = new Date().getFullYear();