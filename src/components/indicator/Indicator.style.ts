import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  width: 3.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  overflow: hidden;
`;

export const DotsBox = styled.div`
  display: flex;
  width: 0.5rem;
  height: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

export const Dots = styled(motion.li)<{ $isClickable: boolean }>`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  cursor: ${(props) => (props.$isClickable ? 'pointer' : 'default')};
  background-color: ${(props) => props.theme.colors.grayScale.gy200};
`;
