import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
       font-family: 'Kanit';
    }
    html, body {
        width: 100%;
        height: 100%;
        background-color: #323031;
    }
    #root{
        margin: 0 auto;
        width: 100%;
        min-height: 100%;
        background-color: #323031;
    }
`;
