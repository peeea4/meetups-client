import Cookies from 'js-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { authSelector } from '../../store/selectors/auth';
import { logout } from '../../store/slices/authSlice';
import { Button } from '../base/Button/Button';
import { ButtonWrapper, NavItem, NavItemList, NavPanel } from './styled';

const NAV_LIST = [
    {
        title: 'Meetups List',
        techName: 'getMeetupsList',
        url: '/',
    },
    {
        title: 'User By Id',
        techName: 'getUserById',
        url: '/user-by-id',
    },
];

export const NavigationPanel = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const { isAuthorized } = useAppSelector(authSelector);

    const [selectedItem, setSelectedItem] = useState('getMeetupsList');

    const buttonClickHandler = () => {
        Cookies.remove('accessToken');
        dispatch(logout());
        navigate('/auth');
    };

    const tabClickHandler = (value: string, url: string) => {
        setSelectedItem(value);
        if (url) {
            navigate(url);
        }
    };

    if (isAuthorized) {
        return (
            <NavPanel>
                <NavItemList>
                    {NAV_LIST?.map((item) => (
                        <NavItem
                            key={item?.techName}
                            onClick={() =>
                                tabClickHandler(item?.techName, item?.url)
                            }
                            $isActive={selectedItem === item?.techName}
                        >
                            {item?.title}
                        </NavItem>
                    ))}
                </NavItemList>
                <ButtonWrapper>
                    <Button onClick={buttonClickHandler}>Logout</Button>
                </ButtonWrapper>
            </NavPanel>
        );
    }

    return null;
};
