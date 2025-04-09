import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Nav = styled.nav`
  height: 106px;
  padding: 8px 20px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
