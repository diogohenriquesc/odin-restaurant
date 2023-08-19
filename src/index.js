import loadHeader from "./functions/load-header";
import loadHome from "./functions/load-home";
import buttonClick from "./functions/header-btn-click";

loadHeader();
loadHome();

const headerButtons = document.querySelectorAll('.header__nav-btn');

headerButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    buttonClick(e.target);
  });
});