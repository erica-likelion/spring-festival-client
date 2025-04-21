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
  transition:
    background-color 0.3s ease,
    border 0.3s ease;
  cursor: pointer;
  border: ${(props) =>
    props.isActive ? 'none' : `0.6px solid ${props.theme.colors.grayScale.white}`};
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.primary.bl400 : props.theme.colors.grayScale.black};

  &:active {
    background-color: ${(props) => props.theme.colors.grayScale.gy950};
  }
`;

export const TabText = styled.p<{ isActive: boolean }>`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) =>
    props.isActive
      ? `${props.theme.colors.grayScale.black}`
      : `${props.theme.colors.grayScale.white}`};
  text-align: center;
  text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  white-space: nowrap;
  transition: color 0.3s ease;
`;
