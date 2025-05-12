import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 10rem;
  padding: 1.5rem 1.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy950};
`;

export const Wrap = styled.div`
  display: flex;
  width: 6.3125rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 4rem;
  height: 4rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
`;

export const ColorButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Name = styled.p`
  ${(props) => props.theme.fonts.body.medium500};
  color: ${(props) => props.theme.colors.grayScale.white};
  text-align: center;
`;
export const Description = styled.p`
  ${(props) => props.theme.fonts.body.xsmall400};
  color: ${(props) => props.theme.colors.grayScale.white};
  text-align: center;
  align-self: stretch;
`;
