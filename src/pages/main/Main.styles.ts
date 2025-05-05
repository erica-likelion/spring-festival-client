import styled from 'styled-components';

export const Main = styled.main`
  overflow: hidden;
`;

export const Title = styled.div`
  ${(props) => props.theme.fonts.header.h3}
  color: ${(props) => props.theme.colors.grayScale.white};
  margin: 0.88rem 1.25rem 0;
`;

export const CarouselsBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0 2rem;
  overflow: hidden;
`;
