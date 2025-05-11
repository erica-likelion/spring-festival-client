import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  position: relative;
`;

export const Button = styled(motion.button)`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: none;
  display: flex;
  align-items: center;
`;

export const InputField = styled.span`
  width: 6.25rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy950};
  border-radius: 0.375rem;
  border: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  ${(props) => props.theme.fonts.body.medium500};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const InputFieldInput = styled.input`
  width: 6.25rem;
  background-color: transparent;
  text-align: center;
  border: none;
  ${(props) => props.theme.fonts.body.medium500};
  ${(props) => props.theme.colors.grayScale.white};

  &:focus {
    outline: none;
  }
`;

export const InputFieldText = styled(motion.span)`
  ${(props) => props.theme.fonts.body.medium500};
  ${(props) => props.theme.colors.grayScale.white};
`;
