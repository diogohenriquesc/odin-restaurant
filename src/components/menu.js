import createElement from '../functions/create-element';
import hamburgerImage from '../assets/hamburger.png';
import slushImage from '../assets/slush.png';
import wineImage from '../assets/wine.png';
import ramenImage from '../assets/ramen.png';
import pinaColadaImage from '../assets/pina-colada.png';
import pokeBowelImage from '../assets/poke-bowel.png';
import englishBreakfastImage from '../assets/english-breakfast.png';
import shawarmaImage from '../assets/shawarma.png';

const menu = [
	{
		name: 'hamburger',
		image: hamburgerImage,
	},
	{
		name: 'slush',
		image: slushImage,
	},
	{
		name: 'wine',
		image: wineImage,
	},
	{
		name: 'ramen',
		image: ramenImage,
	},
	{
		name: 'pina colada',
		image: pinaColadaImage,
	},
	{
		name: 'poke bowel',
		image: pokeBowelImage,
	},
	{
		name: 'english breakfast',
		image: englishBreakfastImage,
	},
	{
		name: 'shawarma',
		image: shawarmaImage,
	},
];

const createMenu = () => {
	const menuContainer = createElement('section', null, ['menu', 'container']);

	let menuCards = [];

	for (let i = 0; i < menu.length; i++) {
		const cardImage = createElement('img', null, 'menu__item-image');
		cardImage.setAttribute('src', menu[i].image);

		const cardName = createElement('p', menu[i].name, 'menu__item-name');

		const menuCard = createElement('div', null, 'menu__item');
		menuCard.appendChild(cardImage);
		menuCard.appendChild(cardName);

		menuCards.push(menuCard);
	}

	for (let card of menuCards) {
		menuContainer.appendChild(card);
	}

	return menuContainer;
};

export default createMenu;
