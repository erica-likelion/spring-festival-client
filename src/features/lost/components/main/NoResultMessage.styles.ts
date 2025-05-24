import styled from 'styled-components';

export const NoResultMessageWrap = styled.div`
  display: flex;
  width: 100%;
  height: 4.375rem;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
  margin-top: 1.56rem;
`;

export const NoResultMessageBox = styled.div`
  display: flex;
  height: 2.625rem;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
  flex-shrink: 0;
`;

export const NoResultMessageTitle = styled.p`
  ${(props) => props.theme.fonts.body.medium400};
  color: ${(props) => props.theme.colors.grayScale.gy200};
  text-align: center;
`;

export const NoResultMessage = styled.p`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) => props.theme.colors.grayScale.gy200};
  text-align: center;
`;
