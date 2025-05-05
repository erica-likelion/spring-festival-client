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
  height: 100%;
  overflow: hidden;
  margin-bottom: 0.75rem;
`;

export const Title = styled.h1`
  ${(props) => props.theme.fonts.header.h3}
  text-align: start;
`;

export const Body = styled.p`
  ${(props) => props.theme.fonts.body.xsmall400}
  text-align: start;
`;

export const Main = styled.main`
  padding: 1.78rem 1.25rem 4.35rem;
  width: 100%;
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.75rem 0 1.5rem;
`;
