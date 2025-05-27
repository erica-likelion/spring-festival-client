import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  position: relative;
`;

export const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const TabNavContainer = styled.div`
  position: fixed;
  top: 3.875rem;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  z-index: 100;
`;
