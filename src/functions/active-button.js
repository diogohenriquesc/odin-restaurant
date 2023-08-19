const setActiveButton = (clickedButton) => {
  const buttons = document.querySelectorAll('.header__nav-btn');
  clearButtons(buttons);
  clickedButton.classList.add('active');
}

const clearButtons = (buttons) => {
  buttons.forEach(button => {
    button.classList.remove('active');
  });
}

export default setActiveButton;