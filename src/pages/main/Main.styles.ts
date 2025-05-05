import styled from 'styled-components';

export const Main = styled.main`
  overflow: hidden;
`;

export const Title = styled.div`
  ${(props) => props.theme.fonts.header.h3}
  color: ${(props) => props.theme.colors.grayScale.white};
  margin: 1rem 1.21rem;
`;

export const CarouselsBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2.5rem;
  overflow: hidden;
`;
