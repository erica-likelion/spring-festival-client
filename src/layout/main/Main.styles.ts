import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled(motion.main)<{ $isMapPage: boolean }>`
  flex: 1;
  overflow-y: auto;
  z-index: 0;
  padding-top: ${(props) => (props.$isMapPage ? '0' : '3.875rem')};
`;

export const getAnimation = (direction: 'left' | 'right' | 'center') => {
  if (direction === 'right') {
    // 왼쪽 → 오른쪽 진입
    return {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
    };
  } else if (direction === 'left') {
    // 오른쪽 → 왼쪽 진입
    return {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
    };
  } else {
    // 페이드 인
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    };
  }
};
