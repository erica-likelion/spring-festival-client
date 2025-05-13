import styled from 'styled-components';
import { motion } from 'framer-motion';
import { BOTTOM_SHEET_HEIGHT } from '@/constants/map/BottomSheetOptions';

export const BottomSheetMotionDiv = styled(motion.div)`
  height: ${BOTTOM_SHEET_HEIGHT};
  width: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100;
  top: calc(100% - 280px); /* 뷰포트 하단 기준 몇 px */
  left: 0;
  right: 0;
  margin: 0;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  transition: transform 150ms ease-out;
`;

export const BottomSheetHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem 0 1rem;
  margin: 0 1.25rem;
  cursor: grab;
  touch-action: none;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

export const Handle = styled.div`
  width: 2.75rem;
  height: 0.25rem;
  border-radius: 0.125rem;
  background-color: #d4d4d4;
  margin-bottom: 8px;
`;

export const BottomSheetContent = styled.div`
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
  color: ${(props) => props.theme.colors.grayScale.white};
  padding: 0 1.25rem;

  /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  /* Chrome, Safari */
  &::-webkit-scrollbar {
    display: none;
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
