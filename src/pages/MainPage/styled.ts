import styled from 'styled-components';

export const PageWrapper = styled.div`
    background-color: #323031;
    width: 100%;
    height: 100%;
    display: flex;
`;

export const NavPanel = styled.nav`
    background-color: #323031;
    height: 100%;
    border-right: 2px solid white;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const NavItemList = styled.div`
    background-color: #323031;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const NavItem = styled.div<{ $isActive?: boolean }>`
    background-color: #323031;
    font-size: 20px;
    color: white;
    padding-bottom: 4px 0;
    border-bottom: ${({ $isActive }) => ($isActive ? '2px solid white' : '2px solid transparent')};
    width: max-content;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const Title = styled.div`
    font-size: 20px;
    color: white;
    font-weight: 500;
`;
