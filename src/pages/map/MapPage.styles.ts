import styled from 'styled-components';
import { Z_INDEX } from '@/constants/map';

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  touch-action: none; /* 터치 스크롤 방지 */

  /* 임시로 지도 영역을 단색으로 표현 */
  background-color: gray;
`;

export const MapWrapper = styled.div<{ $isBottomSheetOpen?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) =>
    props.$isBottomSheetOpen ? 'calc(100% - 260px)' : '100%'}; /* 260px = 16.25rem */

  z-index: ${Z_INDEX.MAP};
  transition: height 0.3s ease-in-out;
  touch-action: auto; /* 지도 영역은 터치 허용 */
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: ${Z_INDEX.CONTENTS};
  pointer-events: none; /* 컨테이너 자체는 포인터 이벤트를 무시하고 지도로 전달 */

  /* 헤더와 바텀시트 같은 실제 UI 요소들은 포인터 이벤트를 캡처해야 함 */
  & > * {
    pointer-events: auto;
  }
`;

export const ReCenterButton = styled.div<{ $isBottomSheetOpen?: boolean }>`
  position: fixed;
  bottom: ${(props) => (props.$isBottomSheetOpen ? '18rem' : '8rem')};
  left: 1.25rem;
  width: 4rem;
  height: 4rem;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  flex-shrink: 0;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
  cursor: pointer;
  transition: bottom 0.3s ease-in-out;
`;

export const BottomSheetContainer = styled.div`
  z-index: ${Z_INDEX.BOTTOM_SHEET};
`;
