import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const animateList = [
	'slide-up',
	'slide-down',
	'slide-left',
	'slide-right',
	'flip-up',
	'flip-down',
	'flip-left',
	'flip-right',
	'fade',
	'fade-up',
	'fade-down',
	'fade-left',
	'fade-right',
	'fade-up-right',
	'fade-up-left',
	'fade-down-right',
	'fade-down-left',
];

const Animate = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div style={{ paddingBottom: '4rem' }}>
			{[...Array(20).keys()].map(i => {
				return (
					<div
						class='item'
						data-aos={
							animateList[Math.floor(Math.random() * animateList.length)]
						}
						data-aos-duration='1000'
					>
						Item {i}
					</div>
				);
			})}
		</div>
	);
};

export default Animate;
