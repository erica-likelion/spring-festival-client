import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const CardWrap = styled.div`
  position: relative;
  width: 19.3rem;
  height: 13.3rem;
`;

export const MotionCard = styled(motion.div)<{ isHidden: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isHidden ? 'none' : 'block')};
  will-change: transform;
  cursor: ${(props) => (props.isHidden ? 'default' : 'pointer')};
`;
