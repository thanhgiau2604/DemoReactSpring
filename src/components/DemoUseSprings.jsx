import { useSprings, animated } from '@react-spring/web';

const items = [
	{ id: 1, text: 'Item 1' },
	{ id: 2, text: 'Item 2' },
	{ id: 3, text: 'Item 3' },
	{ id: 4, text: 'Item 4' },
];

export default function DemoUseSprings() {
	const [springs, api] = useSprings(
		items.length,
		index => ({
			opacity: 1,
			from: { opacity: 0 },
			transform: 'translate3d(0%,0,0)',
			config: { duration: 500 },
		}),
		[]
	);
	const handleClick = index => {
		api.start(pos => {
			if (pos !== index) return;
			return {
				opacity: 0,
				transform: 'translate3d(-100%,0,0)',
			};
		});
	};

	return (
		<div>
			<h2>Demo useSprings</h2>
			<p>Click item below ↯</p>
			{springs.map((style, index) => (
				<animated.div
					key={items[index].id}
					style={{ ...style, cursor: 'pointer' }}
					onClick={() => handleClick(index)}
				>
					{items[index].text}
				</animated.div>
			))}
			<p style={{ margin: '2rem 0', height: 1, background: '#c5c5c5' }}></p>
		</div>
	);
}
