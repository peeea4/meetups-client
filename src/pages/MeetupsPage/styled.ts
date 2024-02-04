import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    background-color: #323031;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 2px solid white;
    border-radius: 8px;
`;

export const FieldTitle = styled.div`
    display: flex;
    color: gray;
    gap: 12px;
    font-size: 15px;
    padding: 8px 0 0 8px;
`;

export const FieldValue = styled.div`
    display: flex;
    color: white;
    font-size: 20px;
    padding-right: 8px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 32px;
    border-bottom: 1px solid white;
    border-radius: 8px;
`;

export const ButtonsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 16px;
`;

export const StyledMeetupsList = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 12px 24px;
    overflow: scroll;
    gap: 32px;
    max-width: 100%;
    flex-wrap: wrap;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const MeetupNotFound = styled.div`
    padding: 20px 40px;
    color: white;
    font-size: 20px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 0 12px 12px;
`;

export const Icon = styled.img`
    width: 32px;
    height: 32px;
`;

export const ButtonWrapper = styled.div`
    margin-left: auto;
`;
