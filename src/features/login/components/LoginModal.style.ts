import styled from 'styled-components';

export const ModalBox = styled.div`
  color: ${(props) => props.theme.colors.grayScale.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22rem;
  text-align: center;
  gap: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
`;

export const Description1 = styled.p`
  ${(props) => props.theme.fonts.body.medium500};
`;

export const Description2 = styled.p`
  ${(props) => props.theme.fonts.body.small400};
`;

export const SubText = styled.p`
  text-decoration: underline;
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy500};
`;
