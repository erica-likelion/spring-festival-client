import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  gap: 0.75rem;
  border-radius: 0.75rem;
  border: 0.0375rem solid ${(props) => props.theme.colors.grayScale.white};
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TextBtnFrame = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span<{ $isBlue?: boolean }>`
  ${(props) => props.theme.fonts.body.small500};
  color: ${(props) =>
    props.$isBlue ? props.theme.colors.primary.bl400 : props.theme.colors.grayScale.white};
`;

export const HeaderText = styled(Text)`
  ${(props) => props.theme.fonts.header.h4};
`;

export const MediumText = styled(Text)`
  ${(props) => props.theme.fonts.body.small500};
  display: flex;
  gap: 0.25rem;
`;

export const SmallText = styled(Text)`
  ${(props) => props.theme.fonts.body.xsmall500};
`;

export const HorizontalLine = styled.div`
  height: 0.0625rem;
  background: ${(props) => props.theme.colors.grayScale.gy900};
`;

export const ButtonFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;

export const Button = styled(motion.button)`
  width: 15rem;
  padding: 0.5rem 0.75rem 0.5rem 1.25rem;
  background-color: ${(props) => props.theme.colors.primary.bl400};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.38rem;
  border: none;
  border-radius: 0.75rem;

  &:disabled {
    background-color: ${(props) => props.theme.colors.grayScale.gy700};
  }
`;
