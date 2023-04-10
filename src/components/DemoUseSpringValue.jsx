import { animated, useSpringValue } from '@react-spring/web';

export default function DemoUseSpringValue() {
	const opacity = useSpringValue(0, {
		config: {
			mass: 2,
			friction: 5,
			tension: 80,
		},
	});

	const handleClick = () => opacity.start(1);

	return (
		<div>
			<h2>Demo useSpringValue</h2>
			<p>Click item below ↯</p>
			<div style={{ background: '#e0e0e0', height: 40 }}>
				<animated.div onClick={handleClick} style={{ opacity }}>
					Hello World
				</animated.div>
			</div>
			<p style={{ margin: '2rem 0', height: 1, background: '#c5c5c5' }}></p>
		</div>
	);
}
