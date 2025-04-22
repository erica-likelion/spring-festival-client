import styled, { css, keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-1.25rem);
  }
`;

export const Container = styled.div<{ $isClosing?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  min-width: 20rem;
  width: 20.9375rem;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  ${(props) =>
    props.$isClosing &&
    css`
      animation: ${fadeOut} 0.3s ease forwards;
    `}
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`;

export const Title = styled.p`
  ${(props) => props.theme.fonts.header.h4};
  color: ${(props) => props.theme.colors.grayScale.white};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;
  min-width: 0;
  margin: 0;
  padding: 0;
  text-align: left;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  height: 100%;
  margin: 0;
`;
