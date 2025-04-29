import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 3.5rem;
  height: 0.5rem;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.25rem;
  flex-shrink: 0;
`;

export const Dots = styled.div<{ isActive: boolean }>`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary.bl400 : theme.colors.grayScale.gy200};
`;
