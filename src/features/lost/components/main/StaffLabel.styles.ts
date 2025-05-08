import styled from 'styled-components';

export const StaffLabel = styled.div<{ $absolute?: boolean }>`
  ${({ $absolute }) =>
    $absolute &&
    `
    position: absolute;
    bottom: 0.37rem;
    left: 0.38rem;
  `}
  display: flex;
  padding: 0.25rem 0.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.grayScale.gy950};
`;

export const LabelText = styled.div`
  ${(props) => props.theme.fonts.body.xsmall400};
  color: ${({ theme }) => theme.colors.grayScale.white};
`;
