import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    
    body {
        overscroll-behavior-y: contain; // 당겨서 새로고침 제거
        
        user-select: none;
        -webkit-user-select: none; // 영역 드래그 제거

        viewport-fit: cover; // 노치 포함 화면
    }
    html {
        background-color: #373D3F;
    }
`;
