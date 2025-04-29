import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CarouselContainer = styled.div<{ fade: 'in' | 'out' }>`
  position: relative;
  height: 19.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 800px;
  overflow: visible;
  transition: opacity 0.4s ease;
  opacity: ${(props) => (props.fade === 'in' ? 1 : 0)};
`;

export const Card = styled.div`
  position: absolute;
  min-width: 14.375rem;
  min-height: 19.875rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  transition: all 0.5s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.active {
    transform: translateX(0) scale(1) rotateY(0deg);
    opacity: 1;
    z-index: 3;
  }

  &.left {
    transform: translateX(-3.44rem) scale(0.8) rotateY(0deg);
    z-index: 2;
    opacity: 0.5;
  }

  &.right {
    transform: translateX(3.44rem) scale(0.8) rotateY(0deg);
    z-index: 2;
    opacity: 0.5;
  }

  &.far-left {
    transform: translateX(-6.875rem) scale(0.6) rotateY(0deg);
    z-index: 1;
    opacity: 0.3;
  }

  &.far-right {
    transform: translateX(6.875rem) scale(0.6) rotateY(0deg);
    z-index: 1;
    opacity: 0.3;
  }

  &.hidden {
    opacity: 0;
    z-index: 1;
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

export const SingerName = styled.p`
  ${(props) => props.theme.fonts.header.h1};
  color: ${(props) => props.theme.colors.grayScale.white};
  transition: opacity 0.4s ease;
`;

export const TimeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.375rem;
`;

export const TimeText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy300};
  transition: opacity 0.4s ease;
`;

export const AlertBox = styled.div`
  display: flex;
  padding: 0.25rem 0.75rem 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
`;

export const AlertText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.white};
  text-align: center;
  transition: opacity 0.4s ease;
`;
