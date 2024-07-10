import { createBrowserRouter } from 'react-router-dom'
import { DetailViewPage, HomePage, LoginPage, RegisterPage } from '../pages'

export const router = createBrowserRouter([
	{
		path: '/home',
		element: <HomePage />,
	},
	{
		path: '/:id',
		element: <DetailViewPage />,
	},
	{ path: '/', element: <RegisterPage />, index: true },
	{ path: '/login', element: <LoginPage /> },
])
