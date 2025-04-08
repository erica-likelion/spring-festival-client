import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    body {
        overscroll-behavior-y: contain; 
        user-select: none;
        -webkit-user-select: none; 
        viewport-fit: cover; 
    }
    
    html {
        background-color: #373D3F;
    }
`;
