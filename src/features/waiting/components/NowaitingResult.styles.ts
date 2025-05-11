import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  justify-content: center;
  height: calc(100vh - 6.625rem);
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.header.h3};
`;

export const TextFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
