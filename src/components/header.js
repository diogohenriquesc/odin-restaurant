import createElement from "../functions/create-element";

const createHeader = () => {
	const logo = createLogo();

  const nav = createNav();

	const header = createElement('header', null, 'header');
	header.appendChild(logo);
  header.appendChild(nav);

	return header;
}

const createLogo = () => {
  const logo = createElement('div', null, 'header__logo');
  const logoFirstName = createElement('p', 'delicioso', 'header__logo-text');
  const logoLastName = createElement('p', '- restaurant -', 'header__logo-text');
  logo.appendChild(logoFirstName);
  logo.appendChild(logoLastName);

  return logo;
}

const createNav = () => {
  const nav = createElement('div', null, 'header__nav');

	const navButtons = [
		createElement('button', 'home', ['header__nav-btn', 'btn-home']),
		createElement('button', 'menu', ['header__nav-btn', 'btn-menu']),
		createElement('button', 'contact', ['header__nav-btn', 'btn-contact']),
	];

	navButtons[0].classList.add('active');

	for (let button of navButtons) {
		nav.appendChild(button);
	}

  return nav;
}

export default createHeader;