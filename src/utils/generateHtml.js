export const generateRandomHTML = () => {
	const tags = ['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol'];
	const headings = [
		'Welcome to My Website',
		'About Us',
		'Our Services',
		'Contact Us',
	];
	const adjectives = [
		'awesome',
		'fantastic',
		'amazing',
		'incredible',
		'wonderful',
	];
	const verbs = ['explore', 'discover', 'enjoy', 'learn', 'experience'];
	const loremIpsum =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

	let html = '';

	// Generate random headings
	for (let i = 0; i < headings.length; i++) {
		const randomTag = `h${Math.floor(Math.random() * 3) + 1}`;
		const randomAdjective =
			adjectives[Math.floor(Math.random() * adjectives.length)];
		const content = `${headings[i]} - ${randomAdjective}`;
		const headingHTML = `<${randomTag}>${content}</${randomTag}>`;
		html += headingHTML;
	}

	// Generate random paragraphs
	for (let i = 0; i < 3; i++) {
		const randomTag = tags[Math.floor(Math.random() * tags.length)];
		const content = `${loremIpsum.slice(
			0,
			Math.floor(Math.random() * 100) + 50
		)}.`;
		const paragraphHTML = `<${randomTag}>${content}</${randomTag}>`;
		html += paragraphHTML;
	}

	// Generate random lists
	for (let i = 0; i < 10; i++) {
		const randomTag = tags[Math.floor(Math.random() * tags.length)];
		let listItems = '';
		for (let j = 0; j < 5; j++) {
			const listItemContent = `${
				verbs[Math.floor(Math.random() * verbs.length)]
			} the ${
				adjectives[Math.floor(Math.random() * adjectives.length)]
			} ${loremIpsum.slice(0, Math.floor(Math.random() * 20) + 10)}.`;
			const listItemHTML = `<li>${listItemContent}</li>`;
			listItems += listItemHTML;
		}
		const listHTML = `<${randomTag}>${listItems}</${randomTag}>`;
		html += listHTML;
	}

	return html;
};
