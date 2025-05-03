import styled from 'styled-components';
import { StyledButtonProps } from './BlueButton.types';

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ $isBigger }) => ($isBigger ? '0.5rem 1.25rem' : '0.25rem 1rem')};
  width: ${({ $isBigger }) => ($isBigger ? '15rem' : '7.5rem')};
  border: none;
  border-radius: ${({ $isBigger }) => ($isBigger ? '0.75rem' : '0.5rem')};
  background-color: ${({ $disabled, theme }) =>
    $disabled ? theme.colors.grayScale.gy700 : theme.colors.primary.bl400};
  ${({ $isBigger, theme }) =>
    $isBigger == true ? theme.fonts.body.medium500 : theme.fonts.body.small500};
  color: ${(props) => props.theme.colors.grayScale.white};
  white-space: nowrap;
  margin-bottom: 1rem;
`;
