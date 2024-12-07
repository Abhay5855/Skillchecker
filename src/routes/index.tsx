import React from 'react';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
const CreateRoom = lazy(() => import('../pages/CreateRoom'));

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />,
	},
	{
		path: '/create-room',
		element: <CreateRoom />,
	},
]);
