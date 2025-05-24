import styled from 'styled-components';
import BackLayout from '@/assets/icons/Background-main.svg';
import { motion } from 'framer-motion';

export const Layout = styled.div`
  background-image: url(${BackLayout});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 24rem;
  position: absolute;
`;
export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: 5.37rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: ${(props) => props.theme.colors.grayScale.white};
  position: relative;
`;

export const Title = styled.p`
  ${(props) => props.theme.fonts.header.h3}
`;

export const CarouselsBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2.5rem;
`;

export const Effect = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  justify-content: flex-end;
  z-index: 10;
  width: 100%;
  pointer-events: none;
`;

export const BackEffect = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  justify-content: flex-start;
  z-index: -10000;
  width: 100%;
  pointer-events: none;
`;

// ne
export const TitleWrapper = styled.div`
  display: flex;
  width: 20.9375rem;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 1.21rem;
`;

export const BlackButton = styled(motion.div)`
  display: flex;
  padding: 0.25rem 0.625rem 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
`;

export const BtnText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500}
  text-align: center;
`;
