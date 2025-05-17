import styled from 'styled-components';

interface ImageProps {
  $hasImage?: boolean;
}

export const Container = styled.div<ImageProps>`
  display: flex;
  width: 20.9375rem;
  padding: ${({ $hasImage }) =>
    $hasImage ? '0.75rem 0.5rem 0.75rem 0.75rem' : '0.875rem 0.5rem 0.875rem 1.125rem'};
  align-items: center;
  gap: 1.25rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy950};
  cursor: pointer;

  &:active {
    background-color: ${(props) => props.theme.colors.grayScale.black};
  }
`;

export const Image = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 2.5rem;
  background-color: transparent;
`;

export const TextWrap = styled.div<ImageProps>`
  display: flex;
  flex-direction: column;
  width: ${({ $hasImage }) => ($hasImage ? '12.1875rem' : '16.5625rem')};
  gap: 0.125rem;
`;

export const TitleText = styled.p`
  ${(props) => props.theme.fonts.header.h4};
  align-self: stretch;
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const DescriptionText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall400};
  align-self: stretch;
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 20px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgb(0 0 0 / 20%);
`;
