
const menuHambureguer = document.querySelector('.menu-hamburguer');
menuHambureguer.addEventListener('click', () => {
  toggleMenu();
});

function toggleMenu() {
  const nav = document.querySelector('.nav-responsive');
  menuHambureguer.classList.toggle('change');

  if (menuHambureguer.classList.contains('change')) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}