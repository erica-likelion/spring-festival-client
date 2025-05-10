import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  display: flex;
  cursor: grab;
`;

export const SliderWrapper = styled.div`
  overflow: hidden;
  padding: 16px;
  width: 100%;
`;

export const Box = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
`;
