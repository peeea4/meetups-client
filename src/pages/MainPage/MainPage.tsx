import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks/store';
import { authSelector } from '../../store/selectors/auth';
import { PageWrapper } from './styles';

export const MainPage = () => {
    const navigate = useNavigate();

    const { isAuthorized } = useAppSelector(authSelector);

    useEffect(() => {
        if (!isAuthorized) {
            navigate('/auth');
        }
    }, []);

    return <PageWrapper>Main Page</PageWrapper>;
};
