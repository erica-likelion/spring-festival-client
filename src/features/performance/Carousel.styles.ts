import { styled, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const popIn = keyframes`
  0% {
    transform: scale(0.98);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0.7;}
  to { opacity: 1;}
`;

const fadeOut = keyframes`
  from { opacity: 1;}
  to { opacity: 0.7;}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarouselContainer = styled.div`
  position: relative;
  height: 19.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 800px;
  overflow: visible;
`;

export const Card = styled(Link)<{ $fadeIn?: boolean }>`
  position: absolute;
  width: 14.375rem;
  height: 19.875rem;
  flex-shrink: 0;
  transition: all 0.5s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    background-color: transparent;
    transition: background-color 0.3s ease;
    border-radius: 0.5rem;
  }

  &.fade-in {
    animation: ${fadeIn} 0.6s ease forwards;
  }

  &.fade-out {
    animation: ${fadeOut} 0.8s ease forwards;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    position: relative;
    z-index: 0;
  }

  &.active {
    transform: translateX(0) scale(1) rotateY(0deg);
    opacity: 1;
    z-index: 3;
  }

  &.left {
    transform: translateX(-3.44rem) scale(0.8) rotateY(0deg);
    z-index: 2;
  }

  &.left::before {
    background: linear-gradient(0deg, rgb(0 0 0 / 20%), rgb(0 0 0 / 20%));
  }

  &.right {
    transform: translateX(3.44rem) scale(0.8) rotateY(0deg);
    z-index: 2;
    opacity: 0.5;
  }

  &.right::before {
    background: linear-gradient(0deg, rgb(0 0 0 / 20%), rgb(0 0 0 / 20%));
  }

  &.far-left {
    transform: translateX(-6.875rem) scale(0.6) rotateY(0deg);
    z-index: 1;
    opacity: 0.3;
  }

  &.far-left::before {
    background: linear-gradient(0deg, rgb(0 0 0 / 70%) 0%, rgb(0 0 0 / 70%) 100%);
  }

  &.far-right {
    transform: translateX(6.875rem) scale(0.6) rotateY(0deg);
    z-index: 1;
    opacity: 0.3;
  }

  &.far-right::before {
    background: linear-gradient(0deg, rgb(0 0 0 / 70%) 0%, rgb(0 0 0 / 70%) 100%);
  }

  &.hidden {
    opacity: 0;
    z-index: 0;
    pointer-events: none;
  }
`;

export const SingerTimeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  margin-top: 0.75rem;
`;

export const SingerName = styled.p<{ fade: 'in' | 'out' }>`
  ${(props) => props.theme.fonts.header.h1};
  color: ${(props) => props.theme.colors.grayScale.white};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  animation: ${(props) => props.fade === 'in' && popIn} 0.5s ease;
`;

export const TimeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.375rem;
`;

export const TimeText = styled.p<{ fade: 'in' | 'out' }>`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy300};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  animation: ${(props) => props.fade === 'in' && popIn} 0.5s ease;
`;

export const AlertBox = styled.div`
  display: flex;
  padding: 0.25rem 0.75rem 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  cursor: pointer;
`;

export const AlertText = styled.p<{ fade: 'in' | 'out' }>`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.white};
  text-align: center;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  animation: ${(props) => props.fade === 'in' && popIn} 0.3s ease;
`;
