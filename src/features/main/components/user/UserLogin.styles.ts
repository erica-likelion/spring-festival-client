import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  width: 20.9375rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.colors.grayScale.white};
  padding-bottom: 2.5rem;
`;

export const Title = styled.p`
  ${(props) => props.theme.fonts.body.medium500}
  text-align: center;
`;

export const Sub = styled.p`
  ${(props) => props.theme.fonts.body.small400}
  text-align: center;
`;

export const ButtonWrap = styled.div`
  ${(props) => props.theme.fonts.body.medium500}
`;
