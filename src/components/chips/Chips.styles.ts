import styled from 'styled-components';

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

export const Chip = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 1rem;
  border: 0.0375rem solid ${(props) => props.theme.colors.grayScale.white};
  cursor: pointer;
`;

export const ChipText = styled.p`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) => props.theme.colors.grayScale.gy100};
  text-align: center;
  white-space: nowrap;
`;
