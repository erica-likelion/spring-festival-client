import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RankList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0rem 0rem 13.12rem;
`;

export const RankItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Count = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy400};
`;
