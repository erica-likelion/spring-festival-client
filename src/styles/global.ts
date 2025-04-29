import { fontFaces } from '@/styles/fonts';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fontFaces}

    :root {
        font-size: 24px;

        @media screen and (width <= 1024px) {
            font-size: 20px;
        }  

        @media screen and (width <= 768px) {
            font-size: 16px;
        }
    }

    html, body {
        overscroll-behavior: none contain;
        user-select: none;
        -webkit-user-select: none;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: ${(props) => props.theme.colors.grayScale.black};
        font-family: SUIT, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    
    html {
        padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    }
    
    #root {
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.colors.grayScale.black};
        position: fixed;

        ${(props) => props.theme.media.browser} {
            @media screen and (width >= 1024px) {
                width: 1024px;
                height: 100%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }

    * {
        box-sizing: border-box;
    }
`;
