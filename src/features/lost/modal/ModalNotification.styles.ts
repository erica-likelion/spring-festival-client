import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
`;

export const ModalText = styled.p`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) => props.theme.colors.grayScale.white};
  text-align: center;
  margin-top: 1.25rem;
`;

export const ModalTextBold = styled.span`
  ${(props) => props.theme.fonts.body.small500};
  color: ${(props) => props.theme.colors.secondary.pk200};
`;
