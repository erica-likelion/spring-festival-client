import styled from 'styled-components';
import { motion } from 'framer-motion';
import CloseBtn from '@/assets/icons/nrk_close.svg?react';
import HelpIcon from '@/assets/icons/nrk_help.svg?react';

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgb(0 0 0 / 70%);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
`;

export const ModalWrapper = styled(motion.div)`
  width: 335px;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  border-radius: 12px;
  margin-top: -105px;
`;

export const ModalTab = styled.div`
  height: 48px;
  border-bottom: 0.6px solid ${(props) => props.theme.colors.grayScale.gy900};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  position: relative;
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ModalTitleText = styled.span`
  ${(props) => props.theme.fonts.header.h4};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Help = styled(HelpIcon)``;

export const ModalCloseBtn = styled(CloseBtn)`
  position: absolute;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
