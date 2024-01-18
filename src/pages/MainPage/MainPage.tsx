import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { UserCard } from '../../components/UserCard';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { authSelector } from '../../store/selectors/auth';
import { logout } from '../../store/slices/authSlice';
import { Content, NavItem, NavItemList, NavPanel, PageWrapper } from './styled';

export const MainPage = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { isAuthorized } = useAppSelector(authSelector);

    const [selectedItem, setSelectedItem] = useState('');

    const buttonClickHandler = () => {
        Cookies.remove('accessToken');
        dispatch(logout());
        navigate('/auth');
    };

    const tabClickHandler = (value: string) => {
        setSelectedItem(value);
    };

    useEffect(() => {
        if (!isAuthorized) {
            navigate('/auth');
        }
    }, []);

    return (
        <PageWrapper>
            <NavPanel>
                <NavItemList>
                    <NavItem
                        onClick={() => tabClickHandler('Meetups')}
                        $isActive={selectedItem === 'Meetups'}
                    >
                        Meetups
                    </NavItem>
                    <NavItem
                        onClick={() => tabClickHandler('Users')}
                        $isActive={selectedItem === 'Users'}
                    >
                        Users
                    </NavItem>
                </NavItemList>
                <Button onClick={buttonClickHandler}>Logout</Button>
            </NavPanel>
            <Content>
                {isAuthorized && selectedItem === 'Users' && <UserCard />}
            </Content>
        </PageWrapper>
    );
};
