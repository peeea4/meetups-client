import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { AuthPage } from '../../pages/AuthPage';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { MeetupsPage } from '../../pages/MeetupsPage';
import { UserPage } from '../../pages/UserPage';
import { authSelector } from '../../store/selectors/auth';
import { login } from '../../store/slices/authSlice';
import { NavigationPanel } from '../NavigationPanel';

const Layout = () => {
    const { isAuthorized } = useAppSelector(authSelector);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isAuthorized) {
            const token = Cookies.get('accessToken');

            if (token) {
                dispatch(login());
            } else {
                navigate('/auth');
            }
        }
    }, [dispatch, isAuthorized, navigate]);

    return (
        <div>
            {isAuthorized && <NavigationPanel />}
            <Outlet />
        </div>
    );
};

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MeetupsPage />} />
                <Route path="/user-by-id" element={<UserPage />} />
                <Route path="auth" element={<AuthPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
};
