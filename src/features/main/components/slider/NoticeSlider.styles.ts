import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  display: flex;
  cursor: grab;
  width: 100%;
`;

export const SliderWrapper = styled.div`
  width: 21rem;
`;

export const Box = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
`;
