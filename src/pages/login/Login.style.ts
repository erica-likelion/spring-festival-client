import styled from 'styled-components';
import loginbg from '@/assets/images/login-bg.svg';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.62rem;
  background-image: url(${loginbg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  color: ${(props) => props.theme.colors.grayScale.white};
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
  margin-bottom: 2.63rem;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  cursor: pointer;
`;
