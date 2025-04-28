import styled from 'styled-components';
import CloseIcon from '@/assets/icons/close.svg?react';

export const StyledCloseIcon = styled(CloseIcon)`
  width: 0.75rem;
  height: 0.75rem;
  flex-shrink: 0;
`;

export const ChipsContainer = styled.div<{ $autoWidth?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: ${(props) => (props.$autoWidth ? 'auto' : '100%')};
  overflow-x: auto;

  /* 스크롤바 안 보이게 설정 */
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Chip = styled.div<{
  $isFirst?: boolean;
  $isLast?: boolean;
  $margin?: string;
}>`
  display: flex;
  padding: 0.25rem 0.5rem;
  margin-left: ${(props) => (props.$isFirst ? props.$margin : '0')};
  margin-right: ${(props) => (props.$isLast ? props.$margin : '0')};
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 1rem;
  border: 0.0375rem solid ${(props) => props.theme.colors.grayScale.white};
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

export const ChipText = styled.p`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) => props.theme.colors.grayScale.gy100};
  text-align: center;
  white-space: nowrap;
`;
