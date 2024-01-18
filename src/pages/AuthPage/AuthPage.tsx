import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signIn, signUp } from '../../api/auth';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { useAppDispatch } from '../../hooks/store';
import { login } from '../../store/slices/authSlice';
import {
    AuthBlockWrapper,
    Form,
    PageWrapper,
    TabListWrapper,
    TabWrapper,
} from './styles';

export const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [isSignInTab, setIsSignInTab] = useState(true);

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const submitSignInForm = async () => {
        setIsLoading(true);

        signIn({ email, password }).then(({ data, status }) => {
            if (status === 200) {
                dispatch(login());
                Cookies.set('accessToken', data.token, {
                    expires: 1 / 24,
                });
                Cookies.set('refreshToken', data.refreshToken);
                navigate('/');
            }
            setIsLoading(false);
        });
    };

    const submitSignUpForm = async () => {
        setIsLoading(true);
        signUp({ email, password, name, lastName, userName }).then(
            ({ data, status }) => {
                if (status === 200) {
                    dispatch(login());
                    Cookies.remove('accessToken');
                    Cookies.set('accessToken', data.token, {
                        expires: 1,
                    });
                    Cookies.set('refreshToken', data.refreshToken);
                    navigate('/');
                }
                setIsLoading(false);
            }
        );
    };

    const handleTabClick = (value: boolean) => {
        setIsSignInTab(value);
        setEmail('');
        setPassword('');
    };

    useEffect(() => {
        const readToken = () => {
            const token = Cookies.get('accessToken');
            if (token) {
                dispatch(login());
                navigate('/');
            }
        };

        readToken();
    }, []);

    return (
        <PageWrapper>
            <AuthBlockWrapper>
                <TabListWrapper>
                    <TabWrapper
                        onClick={() => handleTabClick(true)}
                        $isActive={isSignInTab}
                    >
                        Sign In
                    </TabWrapper>
                    <TabWrapper
                        onClick={() => handleTabClick(false)}
                        $isActive={!isSignInTab}
                    >
                        Sign Up
                    </TabWrapper>
                </TabListWrapper>
                {isSignInTab && (
                    <Form>
                        <Input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email"
                        />
                        <Input
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                        />
                        <Button onClick={submitSignInForm} disabled={isLoading}>
                            Sign In
                        </Button>
                    </Form>
                )}
                {!isSignInTab && (
                    <Form>
                        <Input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            label="Email*"
                        />
                        <Input
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password*"
                        />
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label="Name*"
                        />
                        <Input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            label="Surname*"
                        />
                        <Input
                            type="text"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            label="Username*"
                        />
                        <Button onClick={submitSignUpForm} disabled={isLoading}>
                            Sign Up
                        </Button>
                    </Form>
                )}
            </AuthBlockWrapper>
        </PageWrapper>
    );
};
