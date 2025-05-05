import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: 29.19rem;
  overflow: hidden;
`;

export const Title = styled.h1`
  ${(props) => props.theme.fonts.header.h3}
  margin-top: 1rem;
  text-align: start;
`;

export const Body = styled.p`
  ${(props) => props.theme.fonts.body.xsmall400}
  margin-top: 0.5rem;
  text-align: start;
  line-height: 1.5;
`;

export const Main = styled.main`
  padding: 0 1.25rem;
`;
