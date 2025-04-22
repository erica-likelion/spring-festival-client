import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  min-width: 20rem;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
  border-radius: 0.5rem;
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

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  height: 100%;
  margin: 0;

  img {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }
`;
