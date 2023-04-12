import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import MyComponents from './pages';
import ScrollingDemo from './pages/ScrollingDemo';
import Animate from './pages/Animate';
import DemoImages from './components/DemoImages';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MyComponents />,
		},
		{
			path: '/scrolling',
			element: <ScrollingDemo />,
		},
		{
			path: '/images',
			element: <DemoImages />,
		},
		{
			path: '/animate',
			element: <Animate />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
