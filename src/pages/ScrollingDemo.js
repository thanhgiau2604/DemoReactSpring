import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { generateRandomHTML } from '../utils/generateHtml';

const html = generateRandomHTML();

const ScrollingDemo = () => {
	const [ref, inView] = useInView({ threshold: 0.5 });
	const animation = useSpring({
		opacity: inView ? 1 : 0,
		transform: inView ? 'translateY(0)' : 'translateY(50px)',
	});

	const data = [
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Jane' },
		{ id: 3, name: 'Bob' },
		{ id: 4, name: 'Hi' },
		{ id: 5, name: 'Hello' },
		{ id: 6, name: 'World' },
		{ id: 7, name: 'Funny' },
	];

	return (
		<div>
			<div
				className='Container'
				dangerouslySetInnerHTML={{ __html: html }}
			></div>
			<div ref={ref}>
				<strong>Main animation content</strong>
				<animated.div style={{ ...animation, marginTop: '2rem' }}>
					<ul className='scroll-animate'>
						{data.map(item => (
							<li key={item.id}>{item.name}</li>
						))}
					</ul>
				</animated.div>
			</div>
			<div
				className='Container'
				dangerouslySetInnerHTML={{ __html: html }}
			></div>
		</div>
	);
};

export default ScrollingDemo;
