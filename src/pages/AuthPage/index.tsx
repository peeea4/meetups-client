import Cookies from 'js-cookie';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signIn, signUp } from '../../api/auth';
import { Button } from '../../components/base/Button/Button';
import { Input } from '../../components/base/Input/Input';
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

    const submitSignInForm = useCallback(() => {
        setIsLoading(true);

        signIn({ email, password })
            .then(({ data, status }) => {
                if (status === 200) {
                    dispatch(login());
                    Cookies.set('accessToken', data.token, {
                        expires: 1 / 24,
                    });

                    navigate('/');
                }
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, [dispatch, email, navigate, password]);

    const submitSignUpForm = useCallback(() => {
        setIsLoading(true);
        signUp({ email, password, name, lastName, userName })
            .then(({ data, status }) => {
                if (status === 200) {
                    dispatch(login());
                    Cookies.remove('accessToken');
                    Cookies.set('accessToken', data.token, {
                        expires: 1,
                    });

                    navigate('/');
                }
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, [dispatch, email, lastName, name, navigate, password, userName]);

    const handleTabClick = (value: boolean) => {
        setIsSignInTab(value);
        setEmail('');
        setPassword('');
        setName('');
        setLastName('');
        setUsername('');
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
    }, [dispatch, navigate]);

    const isSignInFieldsFilled = useMemo(
        () => !!email?.length && !!password?.length,
        [email, password]
    );

    const isSignUpFieldsFilled = useMemo(
        () =>
            !!email?.length &&
            !!password?.length &&
            !!name?.length &&
            !!lastName?.length &&
            !!userName?.length,
        [
            email?.length,
            lastName?.length,
            name?.length,
            password?.length,
            userName?.length,
        ]
    );

    const submitFormByEnter = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Enter' && isSignInFieldsFilled) {
                submitSignInForm();
            }
            if (event.key === 'Enter' && isSignUpFieldsFilled) {
                submitSignUpForm();
            }
        },
        [
            isSignInFieldsFilled,
            isSignUpFieldsFilled,
            submitSignInForm,
            submitSignUpForm,
        ]
    );

    useEffect(() => {
        document.addEventListener('keypress', submitFormByEnter);

        return () => {
            document.removeEventListener('keypress', submitFormByEnter);
        };
    }, [submitFormByEnter]);

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
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                        />
                        <Button
                            onClick={submitSignInForm}
                            disabled={isLoading || !isSignInFieldsFilled}
                        >
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
                            label="Email"
                        />
                        <Input
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            label="Password"
                        />
                        <Input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            label="Name"
                        />
                        <Input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            label="Surname"
                        />
                        <Input
                            type="text"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            label="Username"
                        />
                        <Button
                            onClick={submitSignUpForm}
                            disabled={isLoading || !isSignUpFieldsFilled}
                        >
                            Sign Up
                        </Button>
                    </Form>
                )}
            </AuthBlockWrapper>
        </PageWrapper>
    );
};
