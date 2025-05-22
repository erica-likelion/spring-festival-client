import styled from 'styled-components';

export const Title = styled.h1`
  ${(props) => props.theme.fonts.header.h3}
  text-align: start;
`;

export const Body = styled.div`
  ${(props) => props.theme.fonts.body.small400}
  text-align: start;
  white-space: pre-wrap;
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

export const CustomLink = styled.a`
  color: ${(props) => props.theme.colors.grayScale.white};
  text-decoration: underline;
`;
