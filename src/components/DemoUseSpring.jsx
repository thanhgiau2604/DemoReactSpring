import { animated, useSpring } from '@react-spring/web';

export default function DemoUseSpring() {
	const [springs, api] = useSpring(() => ({
		from: { x: 0 },
	}));

	const handleClick = () => {
		api.start({
			from: {
				x: 0,
			},
			to: {
				x: 100,
			},
		});
	};

	return (
		<div>
			<h2>Demo useSpring</h2>
			<p>Click item below ↯</p>
			<animated.div
				onClick={handleClick}
				style={{
					width: 80,
					height: 80,
					background: '#ff6d6d',
					borderRadius: 8,
					cursor: 'pointer',
					...springs,
				}}
			/>
			<p style={{ margin: '2rem 0', height: 1, background: '#c5c5c5' }}></p>
		</div>
	);
}
