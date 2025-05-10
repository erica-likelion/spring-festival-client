import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 6.25rem;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-bottom: 6.25rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.p`
  ${(props) => props.theme.fonts.header.h3}
  color: ${(props) => props.theme.colors.grayScale.white};
  margin: 1rem 1.21rem;
`;

export const CarouselsBox = styled.section`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
