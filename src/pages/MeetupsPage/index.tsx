import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

import { useEffect, useState } from 'react';

import {
    deleteMeetup,
    getMeetupsData,
    registerForMeetup,
} from '../../api/meetups';
import search from '../../assets/search.svg';
import { Button } from '../../components/base/Button/Button';
import { Input } from '../../components/base/Input/Input';
import { ModalPortal } from '../../components/ModalPortal';
import { useShowModal } from '../../hooks/use-show-modal';
import { Meetup } from '../../types/meetups';
import convertDate from '../../utils/convert-to-locale-date';
import { CreateMeetupModal } from './components/CreateMeetupModal';
import { Header } from './components/CreateMeetupModal/styled';
import { UpdateMeetupModal } from './components/UpdateMeetupModal';
import {
    ButtonsContainer,
    ButtonsRow,
    ButtonWrapper,
    FieldTitle,
    FieldValue,
    Icon,
    InputWrapper,
    Item,
    MeetupNotFound,
    Row,
    StyledMeetupsList,
    Wrapper,
} from './styled';

type MeetupListType = { rows: Meetup[]; count: number };

export const MeetupsPage = () => {
    const [meetups, setMeetups] = useState<{ count: number; rows: Meetup[] }>();

    const [meetupId, setMeetupId] = useState('');
    const [isMeetupsLoading, setIsMeetupsLoading] = useState(false);
    const [isRegisterButtonLoading, setIsRegisterButtonLoading] =
        useState(false);
    const [isDeleteButtonLoading, setIsDeleteButtonLoading] = useState(false);

    const [isCreateModalVisible, openCreateModal, closeCreateModal] =
        useShowModal();

    const [selectedMeetup, setSelectedMeetup] = useState<Meetup>();

    const [isUpdateModalVisible, openUpdateModal, closeUpdateModal] =
        useShowModal();

    const buttonClickHandler = () => {
        setIsMeetupsLoading(true);

        getMeetupsData(Number(meetupId))
            .then(({ data }: { data: MeetupListType }) => {
                setMeetups({
                    rows: convertDate(data?.rows),
                    count: data?.count,
                });
                setIsMeetupsLoading(false);
            })
            .catch((data) => {
                console.error(data);
                setIsMeetupsLoading(false);
                setMeetups(undefined);
            });
    };

    const registerOnMeetupClickHandler = (meetupId: number) => {
        setIsRegisterButtonLoading(true);
        registerForMeetup(Number(meetupId))
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsRegisterButtonLoading(false);
            });
    };

    const deleteMeetupClickHandler = (meetupId: number) => {
        setIsDeleteButtonLoading(true);
        deleteMeetup(Number(meetupId))
            .then(() => {
                buttonClickHandler();
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setIsDeleteButtonLoading(false);
            });
    };

    const openEditModalClickHandler = (item: Meetup) => {
        setSelectedMeetup(item);
        openUpdateModal();
    };

    useEffect(() => {
        const submitFormByEnter = (event: KeyboardEvent) => {
            if (event.key === 'Enter' && meetupId) {
                buttonClickHandler();
            }
        };

        document.addEventListener('keypress', submitFormByEnter);

        return () => {
            document.removeEventListener('keypress', submitFormByEnter);
        };
    }, []);

    useEffect(() => {
        buttonClickHandler();
    }, []);

    return (
        <Wrapper>
            <Header>
                <InputWrapper>
                    <Input
                        type="text"
                        value={meetupId}
                        onChange={(e) => setMeetupId(e.target.value)}
                        label="Meetup ID*"
                        color="white"
                        backgroundColor="#323031"
                        borderColor="white"
                    />
                    <Button
                        disabled={isMeetupsLoading}
                        onClick={buttonClickHandler}
                    >
                        <Icon src={search} alt="Search" />
                    </Button>
                </InputWrapper>

                <ButtonWrapper>
                    <Button onClick={openCreateModal}>Create Meetup</Button>
                </ButtonWrapper>
            </Header>

            {!!meetups?.count && (
                <StyledMeetupsList>
                    {meetups?.rows?.map((meetup) => (
                        <Item key={meetup?.id}>
                            <Row>
                                <FieldTitle>Meetup Title</FieldTitle>
                                <FieldValue>{meetup?.name}</FieldValue>
                            </Row>
                            <Row>
                                <FieldTitle>Description</FieldTitle>
                                <FieldValue>{meetup?.description}</FieldValue>
                            </Row>
                            <Row>
                                <FieldTitle>Location</FieldTitle>
                                <FieldValue>{meetup?.location}</FieldValue>
                            </Row>
                            <Row>
                                <FieldTitle>Start Time</FieldTitle>
                                <FieldValue>{meetup?.startTime}</FieldValue>
                            </Row>
                            <Row>
                                <FieldTitle>End Time</FieldTitle>
                                <FieldValue>{meetup?.endTime}</FieldValue>
                            </Row>
                            <Row>
                                <FieldTitle>Registered By</FieldTitle>
                                <FieldValue>{meetup?.registeredBy}</FieldValue>
                            </Row>
                            <ButtonsContainer>
                                <ButtonsRow>
                                    <Button
                                        onClick={() =>
                                            registerOnMeetupClickHandler(
                                                meetup?.id
                                            )
                                        }
                                        disabled={
                                            isRegisterButtonLoading ||
                                            isDeleteButtonLoading
                                        }
                                    >
                                        Register
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            deleteMeetupClickHandler(meetup?.id)
                                        }
                                        disabled={
                                            isRegisterButtonLoading ||
                                            isDeleteButtonLoading
                                        }
                                    >
                                        Delete
                                    </Button>
                                </ButtonsRow>
                                <ButtonsRow>
                                    <Button
                                        onClick={() =>
                                            openEditModalClickHandler(meetup)
                                        }
                                        disabled={
                                            isRegisterButtonLoading ||
                                            isDeleteButtonLoading
                                        }
                                    >
                                        Edit
                                    </Button>
                                </ButtonsRow>
                            </ButtonsContainer>
                        </Item>
                    ))}
                </StyledMeetupsList>
            )}

            {!meetups?.count && !meetupId && (
                <MeetupNotFound>Meetups not found</MeetupNotFound>
            )}

            {!meetups?.count && !!meetupId && (
                <MeetupNotFound>
                    Meetup with ID {meetupId} not found
                </MeetupNotFound>
            )}

            {isCreateModalVisible && (
                <ModalPortal>
                    <CreateMeetupModal
                        onClose={closeCreateModal}
                        refetchList={buttonClickHandler}
                    />
                </ModalPortal>
            )}
            {isUpdateModalVisible && (
                <ModalPortal>
                    <UpdateMeetupModal
                        item={selectedMeetup}
                        onClose={closeUpdateModal}
                        refetchList={buttonClickHandler}
                    />
                </ModalPortal>
            )}
        </Wrapper>
    );
};
