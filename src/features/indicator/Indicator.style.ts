import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  width: 3.5rem;
  height: 0.5rem;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.25rem;
  flex-shrink: 0;
`;

export const Dots = styled(motion.li)`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.theme.colors.grayScale.gy200};
`;
