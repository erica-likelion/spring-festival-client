import styled from 'styled-components';
import { Z_INDEX } from '@/constants/map';

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  /* 임시로 지도 영역을 단색으로 표현 */
  background-color: gray;
`;

export const MapOverlay = styled.div<{ $headerExpanded?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.$headerExpanded ? '100vh' : '13.33194rem')};
  pointer-events: none;
  z-index: ${Z_INDEX.MAP_OVERLAY};
  background: ${(props) =>
    props.$headerExpanded
      ? `rgba(0, 0, 0, 0.60);`
      : `linear-gradient(
          180deg,
          rgb(23 23 27 / 90%) 0%,
          rgb(23 23 27 / 90%) 22%,
          rgb(23 23 27 / 70%) 35%,
          rgb(23 23 27 / 45%) 48%,
          rgb(74 74 77 / 25%) 60%,
          rgb(255 255 255 / 0%) 75%
        )`};

  /* 부드러운 전환 효과 추가 */
  transition:
    height 0.3s ease,
    background 0.3s ease;
`;

export const MapWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${Z_INDEX.MAP};
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: ${Z_INDEX.CONTENTS};
`;
