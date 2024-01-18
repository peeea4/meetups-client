import { useState } from 'react';

import { getUserById } from '../../api/users';
import { IUser } from '../../types/user';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { FieldTitle, FieldValue, Item, Row, StyledUserCard } from './styled';

export const UserCard = () => {
    const [user, setUser] = useState<IUser>();
    const [userId, setUserId] = useState<string>('');

    const buttonClickHandler = () => {
        if (userId) {
            getUserById(Number(userId)).then(({ data }) => setUser(data));
        }
    };

    return (
        <StyledUserCard>
            <Input
                type="number"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                label="User Id"
                color="white"
                backgroundColor="#323031"
                borderColor="white"
            />
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
            <Button disabled={!userId} onClick={buttonClickHandler}>
                Get User Data
            </Button>
        </StyledUserCard>
    );
};
