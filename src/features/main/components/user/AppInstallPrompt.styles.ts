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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 70%);
`;

export const ModalWrapper = styled(motion.div)`
  min-width: 20.9375rem;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  border-radius: 0.75rem;
  margin-top: -6.625rem;
`;

export const ModalTab = styled.div`
  height: 3rem;
  border-bottom: 0.6px solid ${(props) => props.theme.colors.grayScale.gy900};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  position: relative;
`;

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;

export const ModalTitleText = styled.span`
  ${(props) => props.theme.fonts.header.h4};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Help = styled(HelpIcon)``;

export const ModalCloseBtn = styled(CloseBtn)`
  position: absolute;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 1.25rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
`;

export const ModalText = styled.span`
  ${(props) => props.theme.fonts.body.medium500};
  color: ${(props) => props.theme.colors.grayScale.white};
  text-align: center;
`;

export const CancelButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.grayScale.gy500};
  ${(props) => props.theme.fonts.body.xsmall500};
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
`;
