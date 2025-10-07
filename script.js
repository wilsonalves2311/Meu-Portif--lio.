// Mostra o overlay ao abrir o menu
document.querySelector('.btn-menu').onclick = function() {
  document.querySelector('.menu-mobile').classList.add('open');
  document.querySelector('.menu-overlay').style.display = 'block';
};
// Fecha o overlay junto com o menu
document.querySelector('.close-menu').onclick = function() {
  document.querySelector('.menu-mobile').classList.remove('open');
  document.querySelector('.menu-overlay').style.display = 'none';
};