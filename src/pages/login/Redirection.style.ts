import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

export const LoadingText = styled.p`
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.grayScale.white};
  ${({ theme }) => theme.fonts.header.h4};
`;
