import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-bottom: 0.75rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const CarouselWrapper = styled.figure`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CarouselMotion = styled(motion.div)`
  display: flex;
  height: 100%;
  will-change: transform;
`;

export const CarouselSlide = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  height: 100%;
  flex-shrink: 0;
`;
