import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
`;

export const StaffLabel = styled.div`
  display: flex;
  padding: 0.25rem 0.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.375rem;
  background-color: ${({ theme }) => theme.colors.grayScale.gy950};
`;
export const LabelText = styled.div`
  ${(props) => props.theme.fonts.body.xsmall400};
  color: ${({ theme }) => theme.colors.grayScale.white};
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
