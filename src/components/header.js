import createElement from "../functions/create-element";

const createHeader = () => {
	const logo = createElement('div', null, 'header__logo');
	const logoFirstName = createElement('p', 'delicioso', 'header__logo-text');
	const logoLastName =  createElement('p', '- restaurant -', 'header__logo-text');
	logo.appendChild(logoFirstName);
	logo.appendChild(logoLastName);

	const header = createElement('header', null, 'header');
	header.appendChild(logo);

	return header;
}

export default createHeader;