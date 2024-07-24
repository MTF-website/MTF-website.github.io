
const hamburger = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.hidden-links2');
const sel = document.querySelector('.selector-x');
const sely = document.querySelector('.selector-y');
 
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  sel.classList.toggle('hidden');
  sely.classList.toggle('hidden');
});

