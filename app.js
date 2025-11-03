// Intro splash
const intro = document.getElementById('intro');
const enterBtn = document.getElementById('enterBtn');
if (intro && enterBtn) {
  const hideIntro = () => intro.classList.add('is-hidden');
  // Mostro pagina e poi chiudo splash
  enterBtn.addEventListener('click', hideIntro);
  setTimeout(hideIntro, 1600);
}

// Navbar shadow on scroll + back-to-top
const nav = document.getElementById('nav');
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  const y = window.scrollY || document.documentElement.scrollTop;
  nav.classList.toggle('scrolled', y > 8);
  if (y > 600) toTop.classList.add('show'); else toTop.classList.remove('show');
});
toTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

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