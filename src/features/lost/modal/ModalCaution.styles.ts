import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 20.9375rem;
  padding: 1.5rem;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

export const Title = styled.p`
  ${(props) => props.theme.fonts.body.medium500};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
`;

export const Text = styled.p`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) => props.theme.colors.grayScale.white};
`;
