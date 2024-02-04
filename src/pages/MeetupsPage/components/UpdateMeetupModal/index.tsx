import dayjs from 'dayjs';
import { FC, useEffect, useState } from 'react';

import { updateMeetup } from '../../../../api/meetups';
import { Button } from '../../../../components/base/Button/Button';
import { Input } from '../../../../components/base/Input/Input';
import { Meetup } from '../../../../types/meetups';
import { Item, ModalContent, ModalWrapper } from './styled';

type UpdateMeetupModalProps = {
    item: Meetup | undefined;
    onClose: () => void;
    refetchList: () => void;
};

export const UpdateMeetupModal: FC<UpdateMeetupModalProps> = ({
    item,
    onClose,
    refetchList,
}) => {
    const [name, setEmail] = useState(item?.name || '');
    const [description, setPassword] = useState(item?.description || '');
    const [location, setName] = useState(item?.location || '');
    const [startTime, setLastName] = useState(item?.startTime || '');
    const [endTime, setUsername] = useState(item?.endTime || '');
    const [isLoading, setIsLoading] = useState(false);

    const buttonClickHandler = async () => {
        setIsLoading(true);
        updateMeetup(Number(item?.id), {
            name,
            description,
            location,
            startTime: dayjs(startTime).format(),
            endTime: dayjs(endTime).format(),
        })
            .then(() => {
                setIsLoading(false);
                onClose();
                refetchList();
            })
            .catch(() => {
                setIsLoading(false);
                onClose();
            });
    };

    useEffect(() => {
        const clickHandler = (e: MouseEvent) => {
            if ((e.target as Element).id === 'wrapper') {
                onClose();
            }
        };
        document.addEventListener('click', clickHandler);
    }, []);

    return (
        <ModalWrapper id="wrapper">
            <ModalContent>
                <Item>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Meetup name*"
                        color="white"
                        backgroundColor="#323031"
                        borderColor="white"
                    />
                    <Input
                        type="text"
                        value={description}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Description*"
                        color="white"
                        backgroundColor="#323031"
                        borderColor="white"
                    />
                    <Input
                        type="text"
                        value={location}
                        onChange={(e) => setName(e.target.value)}
                        label="Location*"
                        color="white"
                        backgroundColor="#323031"
                        borderColor="white"
                    />
                    <Input
                        type="text"
                        value={startTime}
                        onChange={(e) => setLastName(e.target.value)}
                        label="Start Time*"
                        color="white"
                        backgroundColor="#323031"
                        borderColor="white"
                    />
                    <Input
                        type="text"
                        value={endTime}
                        onChange={(e) => setUsername(e.target.value)}
                        label="End Time*"
                        color="white"
                        backgroundColor="#323031"
                        borderColor="white"
                    />
                </Item>
                <Button disabled={isLoading} onClick={buttonClickHandler}>
                    Update Meetup
                </Button>
            </ModalContent>
        </ModalWrapper>
    );
};
