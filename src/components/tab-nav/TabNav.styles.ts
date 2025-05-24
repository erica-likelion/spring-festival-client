import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  min-width: 21.25rem;
  height: 2.5rem;
`;

export const Nav = styled.nav`
  padding: 0 1rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.grayScale.gy900};
`;

export const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;
`;

export const Item = styled(motion.li)<{ $current: boolean }>`
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
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: ${(props) => props.theme.colors.grayScale.gy100};
`;
