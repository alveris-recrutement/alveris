/* ALVERIS — menu mobile (hamburger + accordéon) partagé par toutes les pages */
var __navScrollY = 0;
function lockScroll(){
  __navScrollY = window.scrollY || window.pageYOffset || 0;
  document.body.style.top = (-__navScrollY) + 'px';
  document.body.classList.add('menu-open');
}
function unlockScroll(){
  document.body.classList.remove('menu-open');
  document.body.style.top = '';
  window.scrollTo({top:__navScrollY, left:0, behavior:'instant'});
}
function toggleMenu(){
  var h = document.getElementById('hbg');
  var m = document.getElementById('mob-menu');
  if(!h||!m) return;
  var opening = !m.classList.contains('open');
  h.classList.toggle('open');
  m.classList.toggle('open');
  if(opening) lockScroll(); else unlockScroll();
}
function closeMenu(){
  var h = document.getElementById('hbg');
  var m = document.getElementById('mob-menu');
  var wasOpen = !!(m && m.classList.contains('open'));
  if(h) h.classList.remove('open');
  if(m) m.classList.remove('open');
  if(wasOpen) unlockScroll();
}
function toggleAccordion(btn){
  var panel = btn.nextElementSibling;
  var wasOpen = btn.classList.contains('open');
  document.querySelectorAll('.macc-header.open').forEach(function(b){
    b.classList.remove('open');
    if(b.nextElementSibling) b.nextElementSibling.classList.remove('open');
  });
  if(!wasOpen){
    btn.classList.add('open');
    if(panel) panel.classList.add('open');
  }
}
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeMenu();
});
window.addEventListener('resize', function(){
  if(window.innerWidth > 960) closeMenu();
});
