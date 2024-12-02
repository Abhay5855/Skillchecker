import React from 'react';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const CreateRoom = lazy(() => import('../pages/CreateRoom'));

export const router = createBrowserRouter([
	{
		path: '/create-room',
		element: <CreateRoom />,
	},
]);
