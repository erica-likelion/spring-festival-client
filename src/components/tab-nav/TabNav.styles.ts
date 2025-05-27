import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  height: 2.5rem;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  width: 20.9375rem;
  padding: 0 1rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.grayScale.gy900};
`;

export const List = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

export const Item = styled(motion.li)<{ $current: boolean }>`
  flex: 1;
  color: ${(props) =>
    props.$current ? props.theme.colors.grayScale.gy50 : props.theme.colors.grayScale.gy700};
  ${(props) => props.theme.fonts.header.h4};
  position: relative;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Underline = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${(props) => props.theme.colors.grayScale.gy100};
`;
