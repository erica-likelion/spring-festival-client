import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 6.625rem;
`;

export const SkeletonImage = styled(motion.div)`
  width: 100%;
  height: 8.6875rem;
  background-color: ${({ theme }) => theme.colors.grayScale.gy950};
  border-radius: 0.75rem;
`;

export const SkeletonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const SkeletonName = styled(motion.div)`
  width: 5.25rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.colors.grayScale.gy950};
  border-radius: 0.375rem;
`;

export const SkeletonText = styled(motion.div)`
  width: 3rem;
  height: 1.0625rem;
  background-color: ${({ theme }) => theme.colors.grayScale.gy950};
  border-radius: 0.5rem;
`;
