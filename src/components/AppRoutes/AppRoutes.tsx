import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthPage } from '../../pages/AuthPage/AuthPage';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { MainPage } from '../../pages/MainPage/MainPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/auth',
        element: <AuthPage />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

export const AppRoutes = () => {
    return <RouterProvider router={router} />;
};
