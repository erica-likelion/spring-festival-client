import styled from 'styled-components';

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: '100%';
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MenuCategory = styled.p`
  color: ${(props) => props.theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.header.h3};
`;
