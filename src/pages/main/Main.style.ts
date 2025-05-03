import styled from 'styled-components';

export const Title = styled.div`
  ${(props) => props.theme.fonts.header.h3}
  color: ${(props) => props.theme.colors.grayScale.white};
  padding: 0.88rem 1.25rem;
`;
