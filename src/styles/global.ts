import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    html, body {
        overscroll-behavior: none contain;
        user-select: none;
        -webkit-user-select: none;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: ${(props) => props.theme.colors.grayScale.black};
    }
    
    html {
        padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    }
    
    #root {
        height: 100%;
        background-color: ${(props) => props.theme.colors.grayScale.black};
    }

    * {
        box-sizing: border-box;
    }
`;
