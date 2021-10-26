import menu from './menu.json';
import menuTemplate from './templates/menu-template.hbs';

///////////////////////CHECKBOX///////////////////////////
const checkbox = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.body.classList.add(Theme.LIGHT);

checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange() {
  document.body.classList.toggle(Theme.DARK);
  document.body.classList.toggle(Theme.LIGHT);

  setThemeInfoToLocalStorage();
}

function setThemeInfoToLocalStorage() {
  if (document.body.classList.contains(Theme.LIGHT)) {
    checkbox.setAttribute('checked', false);
    localStorage.setItem('active-theme', Theme.LIGHT);
  } else if (document.body.classList.contains(Theme.DARK)) {
    checkbox.setAttribute('checked', true);
    localStorage.setItem('active-theme', Theme.DARK);
  }
}

getThemeInfoFromLocalStorage();

function getThemeInfoFromLocalStorage() {
  if (localStorage.getItem('active-theme') === Theme.DARK) {
    onCheckboxChange();
  }
}

////////////////////////CARDS-MENU/////////////////////////

const menuContainer = document.querySelector('.js-menu');
const markup = menuTemplate(menu);

menuContainer.insertAdjacentHTML('beforeEnd', markup);
