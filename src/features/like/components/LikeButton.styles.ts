import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 6rem;
  padding: 0.5rem 0;
  background: transparent;
  border: none;
  position: relative;
  z-index: 80;
`;

export const Text = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy100};
`;
