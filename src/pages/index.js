import DemoUseSpring from '../components/DemoUseSpring';
import DemoUseSprings from '../components/DemoUseSprings';
import DemoUseSpringValue from '../components/DemoUseSpringValue';
import DemoTransition from '../components/DemoTransition';

export default function MyComponents() {
	return (
		<div style={{ padding: '0 2rem', maxWidth: 700, margin: '0 auto' }}>
			<DemoUseSpring />
			<DemoUseSprings />
			<DemoUseSpringValue />
			<DemoTransition />
		</div>
	);
}
