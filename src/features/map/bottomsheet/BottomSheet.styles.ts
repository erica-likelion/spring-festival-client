import styled from 'styled-components';
import { BOTTOM_SHEET_TRANSITION_MS } from '@/constants/map/BottomSheet.constants';
import { Z_INDEX } from '@/constants/map';

export const BottomSheetOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${Z_INDEX.MAP_OVERLAY};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: transparent;
  pointer-events: none; /* 오버레이를 통과하여 뒷부분 터치 가능하게 함 */
`;

export const BottomSheetContainer = styled.div<{ $height: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${(props) => `${props.$height}rem`};
  width: 100%;
  border-radius: 0.75rem 0.75rem 0 0;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  padding: 0 1.25rem;
  overflow-y: auto;
  transition: height ${BOTTOM_SHEET_TRANSITION_MS}ms ease-out;

  /* 높이는 JavaScript에서 rem 단위로 동적 설정 */
  max-height: 100%;
  z-index: ${Z_INDEX.BOTTOM_SHEET}; /* 바텀시트의 z-index */
  pointer-events: auto; /* 바텀시트 자체는 터치 이벤트 활성화 */

  /* iOS 안전 영역(Safe Area) 고려 */
  padding-bottom: calc(1.25rem + env(safe-area-inset-bottom));
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.75rem;
  cursor: grab;
  width: 100%;
  user-select: none;
  touch-action: none;

  &:active {
    cursor: grabbing;
  }
`;

export const DragHandle = styled.div`
  width: 2.75rem;
  height: 0.25rem;
  border-radius: 0.25rem;
  background-color: #d4d4d4;
  margin: 0.5rem 0 1rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const ContentUnitWrap = styled.div<{ $isLastItem?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5988rem 0;
  border-bottom: ${(props) =>
    props.$isLastItem ? 'none' : `0.0625rem solid ${props.theme.colors.grayScale.gy900}`};
`;

export const NoDataMessage = styled.div`
  color: ${(props) => props.theme.colors.grayScale.gy500};
  font-size: 1rem;
  text-align: center;
  padding: 1rem;
`;
