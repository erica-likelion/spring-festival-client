import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.62rem;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.25rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.grayScale.offwhite};
  ${(props) => props.theme.fonts.body.medium400};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotLoginText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy500};
  padding: 0.25rem 0.75rem;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  cursor: pointer;
`;

export const HeaderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 23.4375rem;
  height: 3.875rem;
  padding: 0rem 1.25rem;
  color: ${(props) => props.theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.header.h3};
`;

export const Right = styled.div`
  width: 1.5rem; /* 왼쪽과 균형 맞추기 위한 빈 영역 */
`;
