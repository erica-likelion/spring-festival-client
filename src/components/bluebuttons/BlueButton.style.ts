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
        return '0.75rem 1.25rem';
      default: // large, large-header 공통
        return '0.5rem 1.25rem';
    }
  }};
  width: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '7.5rem';
      case 'larger':
        return '20.9375rem';
      default:
        return '15rem';
    }
  }};
  ${({ $size, theme }) => {
    switch ($size) {
      case 'larger':
      case 'large-header':
        return theme.fonts.header.h4;
      case 'large':
        return theme.fonts.body.medium500;
      case 'small':
      default:
        return theme.fonts.body.small500;
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
