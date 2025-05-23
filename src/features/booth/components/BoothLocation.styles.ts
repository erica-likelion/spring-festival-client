import styled from 'styled-components';
import BoothImage from '@/assets/images/booth/booth-locate.webp';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Title = styled(Text)`
  ${(props) => props.theme.fonts.header.h3};
`;

export const Locate = styled(Text)`
  ${(props) => props.theme.fonts.body.small500};
`;

export const Map = styled.div`
  background-image: url(${BoothImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 12.5rem;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
  position: relative;
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 0.25rem 0.625rem 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  border-radius: 0.375rem;
  border: none;
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  z-index: 999;
`;

export const ButtonText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.white};
`;
