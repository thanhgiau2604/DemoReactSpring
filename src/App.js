import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import MyComponents from './pages';
import ScrollingDemo from './pages/ScrollingDemo';

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
	]);

	return <RouterProvider router={router} />;
}

export default App;
