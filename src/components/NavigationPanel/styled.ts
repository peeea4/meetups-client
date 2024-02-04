import styled from 'styled-components';

export const NavPanel = styled.nav`
    background-color: #323031;
    border-bottom: 2px solid white;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
`;

export const NavItemList = styled.div`
    background-color: #323031;
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const NavItem = styled.div<{ $isActive?: boolean }>`
    background-color: #323031;
    font-size: 20px;
    color: white;
    padding-bottom: 4px 0;
    border-bottom: ${({ $isActive }) =>
        $isActive ? '2px solid white' : '2px solid transparent'};
    width: max-content;
    cursor: pointer;
`;

export const ButtonWrapper = styled.div`
    margin-left: auto;
`;
