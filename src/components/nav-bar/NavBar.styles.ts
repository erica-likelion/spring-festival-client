import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 3.875rem;
  padding: 0rem 1.25rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background-color: ${(props) => props.theme.colors.grayScale.black};
`;

export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.775rem;
  letter-spacing: -0.025rem;
  text-align: center;
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Empty = styled.image`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Input = styled.input`
  display: flex;
  width: 18.4375rem;
  height: 2.5rem;
  padding: 0.5rem 0.75rem;
  align-items: center;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy950};
  border: 1px solid ${(props) => props.theme.colors.grayScale.gy800};
  color: ${(props) => props.theme.colors.grayScale.white};

  &::placeholder {
    color: ${(props) => props.theme.colors.grayScale.gy500};
  }
`;

export const InputIcon = styled.button`
  position: absolute;
  border: 0;
  background-color: transparent;
  padding: 0 0.75rem;
`;
