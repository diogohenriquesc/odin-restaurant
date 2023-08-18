import loadHome from "./functions/load-home";
import loadMenu from "./functions/load-menu";

loadMenu();

const btnHome = document.querySelector('.btn-home');
const btnContact = document.querySelector('.btn-contact');
const btnAbout = document.querySelector('.btn-about');


btnContact.addEventListener('click', () => {
  console.log('contact')
})