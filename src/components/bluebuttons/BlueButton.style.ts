import styled from 'styled-components';
import { StyledButtonProps } from './BlueButton.types';

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${({ theme }) => theme.colors.grayScale.white};
  white-space: nowrap;
  cursor: pointer;
  border-radius: ${({ $size }) => ($size === 'small' ? '0.5rem' : '0.75rem')};
  padding: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '0.25rem 1rem';
      case 'larger':
      case 'large-header':
        return '0.75rem 1.25rem';
      default:
        return '0.5rem 1.25rem';
    }
  }};
  width: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '7.5rem';
      case 'large':
        return '15rem';
      default:
        return '20.9375rem';
    }
  }};
  ${({ $size, theme }) => {
    switch ($size) {
      case 'small':
        return theme.fonts.body.small500;
      case 'large-header':
        return theme.fonts.header.h4;
      default:
        return theme.fonts.body.medium500;
    }
  }}
  background-color: ${({ theme }) => theme.colors.primary.bl400};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayScale.gy700};
    cursor: not-allowed;
  }

  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;
