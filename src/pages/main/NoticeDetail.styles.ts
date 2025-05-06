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
