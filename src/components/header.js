import createElement from "../functions/create-element";

const createHeader = (currentTab = 0) => {
	const logo = createElement('div', null, 'header__logo');
	const logoFirstName = createElement('p', 'delicioso', 'header__logo-text');
	const logoLastName =  createElement('p', '- restaurant -', 'header__logo-text');
	logo.appendChild(logoFirstName);
	logo.appendChild(logoLastName);

  const nav = createElement('div', null, 'header__nav');
  const navButtons = [
    createElement('button', 'home', ['header__nav-btn', 'btn-home']),
    createElement('button', 'menu', ['header__nav-btn', 'btn-menu']),
    createElement('button', 'contact', ['header__nav-btn', 'btn-contact']),
  ];
  
  navButtons[currentTab].classList.add('active');

  for (let button of navButtons) {
    nav.appendChild(button);
  }

	const header = createElement('header', null, 'header');
	header.appendChild(logo);
  header.appendChild(nav);

	return header;
}

export default createHeader;