import styled from 'styled-components';

export const Text = styled.p`
  align-self: stretch;
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy400};
`;
