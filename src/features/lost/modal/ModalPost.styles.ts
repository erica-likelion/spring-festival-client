import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.25rem;
  flex-direction: column;
  margin-top: 1.25rem;
  gap: 1.25rem;
`;

export const TextWrap = styled.div`
  display: flex;
  width: 16.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Text = styled.p`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Icon = styled.div<{ $checked?: boolean }>`
  display: flex;
  width: 2rem;
  height: 2rem;
  padding: 0.625rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: ${(props) =>
    props.$checked ? 'none' : `1px solid ${props.theme.colors.grayScale.gy400}`};
  background-color: ${(props) =>
    props.$checked ? props.theme.colors.primary.bl400 : 'transparent'};
  cursor: pointer;
  transition:
    background-color 0.4s ease,
    border 0.4s ease;
`;

export const Button = styled.button<{ $active?: boolean }>`
  display: flex;
  width: 15rem;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.75rem;
  border: none;
  background-color: ${(props) =>
    props.$active ? props.theme.colors.primary.bl400 : props.theme.colors.grayScale.gy700};
  cursor: ${(props) => (props.$active ? 'pointer' : 'default')};
  transition: background-color 0.4s ease;
`;

export const ButtonText = styled.p`
  ${(props) => props.theme.fonts.body.medium500};
  color: ${(props) => props.theme.colors.grayScale.white};
  text-align: center;
  transition: color 0.4s ease;
`;
