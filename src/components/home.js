import backgroundSVG from '../assets/background.svg';
import createElement from '../functions/create-element';
import parseSVG from '../functions/parse-svg';

const createHome = () => {
	const introdution = createElement(
		'p',
		`Nestled in a cozy corner, this restaurant is a true gem. The air buzzes with delicious aromas,
    and each dish is a masterpiece. The ambiance is elegant yet inviting, and the attentive staff 
    ensures a memorable experience. It's not just a meal; it's a sensory journey that lingers long 
    after the last bite.`,
		'main__intro'
	);

	const backgroundImage = parseSVG(backgroundSVG);

	const main = createElement('main', null, ['main', 'container']);
	main.appendChild(introdution);
	main.appendChild(backgroundImage);

	return main;
};

export default createHome;
