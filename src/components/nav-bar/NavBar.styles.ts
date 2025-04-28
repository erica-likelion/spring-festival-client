import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 3.875rem;
  padding: 0rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.grayScale.black};
`;

export const Title = styled.p`
  ${(props) => props.theme.fonts.header.h3}
  text-align: center;
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 18.4375rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy950};
  border: 1px solid ${(props) => props.theme.colors.grayScale.gy800};
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;

  input {
    ${(props) => props.theme.fonts.body.medium500}
    flex: 1;
    width: 100%;
    background-color: ${(props) => props.theme.colors.grayScale.gy950};
    border: none;
    color: ${(props) => props.theme.colors.grayScale.white};

    &::placeholder {
      color: ${(props) => props.theme.colors.grayScale.gy500};
    }

    &:focus {
      outline: none;
    }
  }

  button {
    display: flex;
    border: 0;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    padding: 0;
  }
`;

export const InputIcon = styled.button`
  display: flex;
  border: 0;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.75rem;
`;
