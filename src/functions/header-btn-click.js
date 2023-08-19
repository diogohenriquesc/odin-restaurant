import loadHome from "./load-home";
import loadMenu from "./load-menu";
import loadContact from "./load-contact";
import setActiveButton from "./active-button"
import clearContent from "./clear-content";

const buttonClick = (clickedButton) => {
  setActiveButton(clickedButton);
  clearContent();

  if (clickedButton.classList.contains('btn-home')) {
    loadHome();    
  } else if (clickedButton.classList.contains('btn-menu')) {
    loadMenu();
  } else {
    loadContact();
  }
}

export default buttonClick;