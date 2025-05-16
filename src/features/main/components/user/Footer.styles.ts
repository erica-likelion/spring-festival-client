import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 5.37rem;
`;

export const Sub = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500}
  color: ${theme.colors.grayScale.gy500};
  text-align: center;
`;

export const Btn = styled.div`
  text-decoration: underline;
  display: flex;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
`;

export const Out = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500}
  color: ${theme.colors.grayScale.gy500};
  text-decoration: underline;
`;
