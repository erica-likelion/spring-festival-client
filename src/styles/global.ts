import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    html, body {
        overscroll-behavior-y: contain;
        user-select: none;
        -webkit-user-select: none;
        height: 100%;
        overflow: hidden
    }
    
    html {
        background-color: ${(props) => props.theme.colors.grayScale.black};
    }

    #root {
        height: 100%;
    }
`;
