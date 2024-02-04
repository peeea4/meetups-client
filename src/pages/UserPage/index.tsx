import { useEffect, useState } from 'react';

import { getUserById } from '../../api/users';
import { Button } from '../../components/base/Button/Button';
import { Input } from '../../components/base/Input/Input';
import { IUser } from '../../types/user';
import { FieldTitle, FieldValue, InputRow, Item, Row, Wrapper } from './styled';

export const UserPage = () => {
    const [user, setUser] = useState<IUser>();
    const [userId, setUserId] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const buttonClickHandler = () => {
        if (userId) {
            setIsLoading(true);
            getUserById(Number(userId))
                .then(({ data }) => {
                    setUser(data);
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                    setUser(undefined);
                });
        }
    };

    useEffect(() => {
        const submitFormByEnter = (event: KeyboardEvent) => {
            if (event.key === 'Enter' && userId) {
                buttonClickHandler();
            }
        };

        document.addEventListener('keypress', submitFormByEnter);

        return () => {
            document.removeEventListener('keypress', submitFormByEnter);
        };
    }, []);

    return (
        <Wrapper>
            <InputRow>
                <Input
                    type="number"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    label="User Id"
                    color="white"
                    backgroundColor="#323031"
                    borderColor="white"
                />
                <Button
                    disabled={!userId || isLoading}
                    onClick={buttonClickHandler}
                >
                    Get User By Id
                </Button>
            </InputRow>

            {user && (
                <Item>
                    <Row>
                        <FieldTitle>User name</FieldTitle>
                        <FieldValue>{user?.name}</FieldValue>
                    </Row>
                    <Row>
                        <FieldTitle>Last name</FieldTitle>
                        <FieldValue>{user?.lastName}</FieldValue>
                    </Row>
                    <Row>
                        <FieldTitle>Nick name</FieldTitle>
                        <FieldValue>{user?.userName}</FieldValue>
                    </Row>
                    <Row>
                        <FieldTitle>Email</FieldTitle>
                        <FieldValue>{user?.email}</FieldValue>
                    </Row>

                    <Row>
                        <FieldTitle>Role</FieldTitle>
                        <FieldValue>{user?.role}</FieldValue>
                    </Row>
                </Item>
            )}
        </Wrapper>
    );
};
