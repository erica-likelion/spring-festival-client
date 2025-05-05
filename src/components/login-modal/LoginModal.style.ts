import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 70%);
  color: ${(props) => props.theme.colors.grayScale.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  gap: 1.25rem;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  text-align: center;
  gap: 1.25rem;
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

export const Header = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  padding: 0.75rem;
  ${(props) => props.theme.fonts.header.h4};
`;

export const Left = styled.div`
  width: 1.25rem; /* 왼쪽과 균형 맞추기 위한 빈 영역 */
`;
