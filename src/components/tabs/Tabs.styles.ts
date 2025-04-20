import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  overflow-x: auto;

  /* 스크롤바 안 보이게 설정 */
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.button<{ isActive: boolean }>`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 1.25rem;
  border: 0.6px solid ${(props) => props.theme.colors.grayScale.white};
  background-color: ${(props) => props.theme.colors.grayScale.black};
`;

export const TabText = styled.p<{ isActive: boolean }>`
  color: #fafafa;
  text-align: center;
  text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2425rem;
  letter-spacing: -0.0175rem;
  white-space: nowrap;
`;
