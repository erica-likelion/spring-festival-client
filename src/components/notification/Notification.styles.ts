import styled from 'styled-components';

export const Container = styled.div<{ expanded: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 20.9375rem;
  padding: ${({ expanded }) => (expanded ? '0.75rem 1rem' : '0.5rem 1rem')};
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
  border-radius: 0.5rem;
  cursor: pointer;
  max-height: 5.75rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
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
  max-width: 100%;
  margin: 0;
  padding: 0;
  text-align: left;
`;

export const CloseButton = styled.button<{ expanded: boolean }>`
  display: ${({ expanded }) => (expanded ? 'none' : 'block')};
  background: none;
  border: none;
  cursor: pointer;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const Content = styled.div<{ expanded: boolean }>`
  color: ${(props) => props.theme.colors.grayScale.white};
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`;
