import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  width: 20.9864rem;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  display: flex;
  padding: 0.8125rem 1.25rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.75rem;
  border: none;
  background-color: ${(props) => props.theme.colors.grayScale.gy950};
  cursor: pointer;

  &:active {
    background-color: ${(props) => props.theme.colors.grayScale.gy900};
  }
`;

export const IconTextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;

export const Icon = styled.div`
  display: flex;
  padding: 0.25rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 2.5rem;
  background-color: ${(props) => props.theme.colors.primary.bl400};
`;

export const ButtonText = styled.p`
  ${(props) => props.theme.fonts.header.h4};
  color: ${(props) => props.theme.colors.grayScale.gy200};
`;

export const Text = styled.p`
  align-self: stretch;
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy400};
`;
