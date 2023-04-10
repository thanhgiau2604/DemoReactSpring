import React, { useState } from 'react';
import { useSprings, animated } from '@react-spring/web';

const imageUrls = [
	'https://images.unsplash.com/photo-1680549645205-7330eab343d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
	'https://images.unsplash.com/photo-1680978560866-481aff9fd6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
	'https://plus.unsplash.com/premium_photo-1677456379788-82ca409e5bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
	'https://images.unsplash.com/photo-1680768496728-f349342e0bf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
];

const D = {
	Down: 'Down',
	Up: 'Up',
};

const DemoImages = () => {
	const [progress, setProgress] = useState(-1);

	const [springs, api] = useSprings(
		imageUrls.length,
		index => ({
			from: {
				opacity: 0,
				clipPath: index % 2 === 0 ? 'inset(0 0 100% 0)' : 'inset(100% 0 0 0)',
			},
			config: { duration: 800 },
		}),
		[]
	);

	const getStyle = index => {
		if (index % 2 === 0) {
			return {
				left: 0,
				right: 'auto',
			};
		}
		return {
			right: 0,
			left: 'auto',
		};
	};

	const getEffect = (direct, isDisplay) => {
		const clipPathFrom =
			direct === D.Down
				? isDisplay
					? 'inset(0% 0 100% 0)'
					: 'inset(0% 0 0% 0)'
				: isDisplay
				? 'inset(100% 0 0% 0)'
				: 'inset(0% 0 0% 0)';

		const clipPathTo =
			direct === D.Down
				? isDisplay
					? 'inset(0% 0 0% 0)'
					: 'inset(0% 0 100% 0)'
				: isDisplay
				? 'inset(0% 0 0% 0)'
				: 'inset(100% 0 0% 0)';
		return {
			from: {
				opacity: isDisplay ? 0 : 1,
				clipPath: clipPathFrom,
			},
			to: {
				opacity: isDisplay ? 1 : 0,
				clipPath: clipPathTo,
			},
		};
	};

	const getDirection = index => {
		const calc = (imageUrls.length - 1 - progress) / 2 + index;
		return calc % 2 === 0 ? D.Down : D.Up;
	};

	const handleClick = () => {
		if (progress === -1) {
			api.start(index => getEffect(index % 2 === 0 ? D.Down : D.Up, true));
			setProgress(imageUrls.length - 1);
		} else {
			api.start(index => {
				if (index !== progress && index !== progress - 1) return;
				console.log(
					index,
					getDirection(index),
					getEffect(getDirection(index), false)
				);
				return getEffect(getDirection(index), false);
			});
			setProgress(progress - 2);
		}
	};

	return (
		<div className='wrapper'>
			<button className='start-btn' onClick={handleClick}>
				Click me
			</button>
			<div className='img-container'>
				{springs.map((style, index) => (
					<animated.div
						style={{ ...style, ...getStyle(index) }}
						className='animate-wrapper'
						key={imageUrls[index]}
					>
						<img src={imageUrls[index]} alt='' />
					</animated.div>
				))}
			</div>
		</div>
	);
};

export default DemoImages;
