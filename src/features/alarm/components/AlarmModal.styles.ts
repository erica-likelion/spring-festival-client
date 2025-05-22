import styled from 'styled-components';

export const Text = styled.span`
  color: ${(props) => props.theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.body.medium500};
  text-align: center;
`;

export const Container = styled.div`
  padding: 1.25rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
`;

export const BottomText = styled.span`
  color: ${(props) => props.theme.colors.grayScale.gy500};
  ${(props) => props.theme.fonts.body.xsmall500};
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
`;
