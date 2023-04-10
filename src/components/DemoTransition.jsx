import { animated, useTransition } from '@react-spring/web';

export default function DemoTransition({ data = [1, 2, 3] }) {
	const [transitions, api] = useTransition(data, () => ({
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 1 },
	}));

	return (
		<div>
			<h2>Demo useTransition</h2>
			<p>Click green background below ↯</p>
			<div
				style={{ background: '#d6e9d6', cursor: 'pointer' }}
				onClick={() => api.start()}
			>
				{transitions((style, item) => (
					<animated.div style={style}>{item}</animated.div>
				))}
			</div>
			<p style={{ margin: '2rem 0', height: 1, background: '#c5c5c5' }}></p>
		</div>
	);
}
