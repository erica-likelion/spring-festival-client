import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  align-self: stretch;
  width: 20.9864rem;
`;

export const TitleWrap = styled.div`
  display: flex;
  width: 17.0625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
`;

export const Title = styled.p`
  ${(props) => props.theme.fonts.header.h3};
  color: ${(props) => props.theme.colors.grayScale.white};
  align-self: stretch;
`;

export const Description = styled.p`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) => props.theme.colors.grayScale.gy300};
  align-self: stretch;
`;

export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

export const TabIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: flex-start;
  align-content: flex-start;
  gap: 1rem 0.5rem;
  align-self: stretch;
  flex-wrap: wrap;
  transition: opacity 0.4s ease;
`;
