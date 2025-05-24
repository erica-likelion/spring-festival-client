import { theme } from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  gap: 9.25rem;
  margin-top: 1.12rem;
  padding-bottom: 3.37rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 21rem;
  gap: 4.25rem;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  align-self: stretch;
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

export const Input = styled.input`
  display: flex;
  padding: 1.125rem;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.grayScale.gy600};
  ${(props) => props.theme.fonts.body.medium500};
  background-color: transparent;
  color: ${(props) => props.theme.colors.grayScale.white};

  &::placeholder {
    color: ${(props) => props.theme.colors.grayScale.gy400};
  }
`;

export const StaffBox = styled.div`
  display: flex;
  width: 15.0625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const StaffButton = styled.button<{ $active?: boolean }>`
  display: flex;
  width: 15rem;
  padding: 0.5rem 0.75rem 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  border-radius: 0.75rem;
  background-color: ${(props) =>
    props.$active ? props.theme.colors.secondary.bl500 : 'transparent'};
  border: 1px dashed
    ${(props) => (props.$active ? theme.colors.secondary.bl500 : theme.colors.grayScale.gy600)};
  transition: background-color 0.5s ease;
  cursor: pointer;
`;

export const StaffButtonText = styled.p<{ $active?: boolean }>`
  ${(props) => props.theme.fonts.body.medium500};
  color: ${(props) => props.theme.colors.grayScale.white};
  text-align: center;
`;

export const LocationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8125rem;
  align-self: stretch;
`;

export const DescriptionInput = styled.textarea`
  display: flex;
  height: 10.25rem;
  padding: 1rem;
  align-items: flex-start;
  gap: 0.625rem;
  resize: none;
  align-self: stretch;
  border-radius: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.grayScale.gy600};
  ${(props) => props.theme.fonts.body.medium500};
  background-color: transparent;
  color: ${(props) => props.theme.colors.grayScale.white};

  &::placeholder {
    color: ${(props) => props.theme.colors.grayScale.gy400};
  }
`;

export const CheckWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 2rem;
`;

export const CheckText = styled.p`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) => props.theme.colors.grayScale.gy200};
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
    background-color 0.6s ease,
    border 0.6s ease;
`;
