import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled.nav`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 106px;
  padding: 8px 20px 32px;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const NavBtn = styled(motion.button)`
  all: unset;
  width: 60px;
  padding: 8px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  text-decoration-line: none;
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy100};
  border-radius: 8px;
`;

export const NavImg = styled.div`
  width: 24px;
  height: 24px;
  background-color: aliceblue;
  border: 12px;
`;
