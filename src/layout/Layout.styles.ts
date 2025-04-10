import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Main = styled(motion.main)`
  flex: 1;
  overflow-y: auto;
  z-index: 0;
`;
