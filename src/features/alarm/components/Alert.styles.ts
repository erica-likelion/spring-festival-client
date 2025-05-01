import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Button = styled(motion.button)`
  display: inline-flex;
  padding: 0.25rem 0.75rem 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  border-radius: 0.375rem;
  border: none;
  background-color: transparent;
`;

export const IconButton = styled(motion.button)`
  padding: 0.5rem 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.body.xsmall500};
`;
