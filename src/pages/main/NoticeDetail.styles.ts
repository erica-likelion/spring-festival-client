import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Image = styled.img`
  height: 29.19rem;
  align-self: stretch;
`;

export const Title = styled.p`
  ${(props) => props.theme.fonts.header.h2}
  width: 20.94rem;
`;

export const Body = styled.p`
  ${(props) => props.theme.fonts.body.small400}
  align-self: stretch;
`;
