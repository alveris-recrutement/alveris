/* ALVERIS — menu mobile (hamburger + accordéon) partagé par toutes les pages */
function toggleMenu(){
  var h = document.getElementById('hbg');
  var m = document.getElementById('mob-menu');
  if(!h||!m) return;
  h.classList.toggle('open');
  m.classList.toggle('open');
}
function closeMenu(){
  var h = document.getElementById('hbg');
  var m = document.getElementById('mob-menu');
  if(h) h.classList.remove('open');
  if(m) m.classList.remove('open');
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
