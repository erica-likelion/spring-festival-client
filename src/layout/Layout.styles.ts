import styled from 'styled-components';

export const Container = styled.div<{ $isMapPage: boolean }>`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-top: ${(props) => (props.$isMapPage ? '0' : '3.875rem')};
`;
