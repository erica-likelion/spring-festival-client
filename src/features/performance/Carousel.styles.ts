import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 19.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 800px;
  overflow: visible;
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
