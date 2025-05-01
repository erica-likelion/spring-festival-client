import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  min-width: 5.38rem;
  height: 1.62rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  border: none;
  background-color: ${(props) => props.theme.colors.grayScale.black};

  &:disabled {
    & > p {
      color: ${(props) => props.theme.colors.grayScale.gy400} !important;
    }
  }
`;

export const Text = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.white};
`;
