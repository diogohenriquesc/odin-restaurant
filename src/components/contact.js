import createElement from '../functions/create-element';

const createContact = () => {
	const contactContainer = createElement('main', null, [
		'contact',
		'container',
	]);

	contactContainer.appendChild(createContactInfo());

	const contactHours = createElement('div', null, 'contact__hours');

  contactHours.appendChild(createContactHours());

	contactContainer.appendChild(contactHours);

	return contactContainer;
};

const createContactInfo = () => {
	const contactContainerTitle = createElement(
		'h1',
		'contact',
		'contact__title'
	);

	const contactAddress = createElement(
		'p',
		'000 W Some Street - City, STATE 12345',
		'contact__address'
	);

	const contactPhoneNumber = createElement(
		'p',
		'123-456-7890',
		'contact__phone-number'
	);
	
	const container = document.createElement('div');
	container.appendChild(contactContainerTitle);
	container.appendChild(contactAddress);
	container.appendChild(contactPhoneNumber);

	return container;
};

const createContactHours = () => {
	const contactHoursTitle = createElement(
		'h2',
		'hours',
		'contact__hours-title'
	);

	const contactHoursItems = [
		createElement('p', 'Monday | Closed', 'contact__hours-item'),
		createElement('p', 'Tuesday-Sunday | 11am-8pm', 'contact__hours-item'),
	];

	const container = document.createElement('div');

	container.appendChild(contactHoursTitle);
	contactHoursItems.forEach(item => container.appendChild(item));

	return container;
};

export default createContact;
