import styled from 'styled-components';

export const TabsContainer = styled.div<{ $autoWidth?: boolean }>`
  display: flex;
  width: ${(props) => (props.$autoWidth ? 'auto' : '100%')};
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

export const Tab = styled.button<{
  $isActive: boolean;
  $isFirst?: boolean;
  $isLast?: boolean;
  $margin?: string;
}>`
  display: flex;
  padding: 0.25rem 0.5rem;
  margin-left: ${(props) => (props.$isFirst ? props.$margin : '0')};
  margin-right: ${(props) => (props.$isLast ? props.$margin : '0')};
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
  cursor: pointer;
  border: 1px solid;
  border-color: ${(props) =>
    props.$isActive ? 'transparent' : props.theme.colors.grayScale.white};
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.primary.bl400 : 'transparent'};

  &:active {
    background-color: ${(props) => props.theme.colors.grayScale.gy950};
  }
`;

export const TabText = styled.p<{ $isActive: boolean }>`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) =>
    props.$isActive
      ? `${props.theme.colors.grayScale.black}`
      : `${props.theme.colors.grayScale.white}`};
  text-align: center;
  text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  white-space: nowrap;
  transition: color 0.3s ease;
`;
