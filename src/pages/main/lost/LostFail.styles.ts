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

export const Title = styled.p`
  margin-top: 4.06rem;
  ${(props) => props.theme.fonts.header.h3};
  color: ${(props) => props.theme.colors.grayScale.white};
  text-align: center;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  margin-top: 1.5rem;
`;

export const Text = styled.p`
  ${(props) => props.theme.fonts.body.medium400};
  color: ${(props) => props.theme.colors.grayScale.gy200};
  text-align: center;
`;
