import styled from 'styled-components';

interface HeaderProps {
  $expanded: boolean;
}

export const BackButton = styled.button<{ $visible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: ${(props) => (props.$visible ? '1' : '0')};
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;

  svg {
    transform: rotate(90deg);
  }
`;

export const Container = styled.div<HeaderProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: transparent;
`;

export const HeadWrap = styled.div<HeaderProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.19rem 0.88rem 1.44rem;
  position: relative;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  transition: background-color 0.2s ease-in-out;
  height: 3.875rem;
`;

export const TitleWrap = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-45%);
  gap: 0.25rem;
  padding: 0 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Title = styled.div`
  min-width: 5.2rem;
  ${(props) => props.theme.fonts.header.h3};
  color: ${(props) => props.theme.colors.grayScale.white};
  text-align: right;
`;

export const DropdownButton = styled.div<HeaderProps>`
  margin: 0 0 0 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    transform: ${(props) => (props.$expanded ? 'rotate(-180deg)' : 'rotate(0deg)')};
    transition: transform 0.2s ease-in-out;
  }
`;

export const Search = styled.button<HeaderProps>`
  opacity: ${(props) => (props.$expanded ? '0' : '1')};
  visibility: ${(props) => (props.$expanded ? 'hidden' : 'visible')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
`;

export const DropDownWrap = styled.div<HeaderProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 0 0 0.75rem 0.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  border-bottom: 1px solid ${(props) => props.theme.colors.grayScale.gy900};
  box-shadow: ${(props) => (props.$expanded ? '0px 3px 5.9px 0px rgb(255 255 255 / 10%)' : 'none')};
  z-index: 2;

  /* 애니메이션 */
  max-height: ${(props) => (props.$expanded ? '20rem' : '0')};
  overflow: hidden;
  transition:
    max-height 0.2s ease-in-out,
    opacity 0.2s ease-in-out,
    padding 0.2s ease-in-out;
  opacity: ${(props) => (props.$expanded ? '1' : '0')};
  padding: ${(props) => (props.$expanded ? '0 1.25rem 1.25rem 1.25rem' : '0 1.25rem 0 1.25rem')};
`;

export const DaySelectButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 1.18rem 1.66rem;
  cursor: pointer;
  ${(props) => props.theme.fonts.body.medium400};
  color: ${(props) => props.theme.colors.grayScale.white};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.grayScale.gy900};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.grayScale.gy800};
  }

  border-bottom: 1px solid ${(props) => props.theme.colors.grayScale.gy900};

  &:last-child {
    border-bottom: none;
  }
`;

export const OverLayWrap = styled.div<HeaderProps>`
  display: flex;
  flex-direction: column;
`;

export const OverLay = styled.div<HeaderProps>`
  position: absolute;
  top: 3.875rem;
  left: 0;
  width: 100%;
  height: ${(props) => (props.$expanded ? 'calc(100vh - 3.875rem)' : '10rem')};
  z-index: 1;
  pointer-events: none;
  background: ${(props) =>
    props.$expanded
      ? `rgba(0, 0, 0, 0.60);`
      : `linear-gradient(
          180deg,
          ${props.theme.colors.grayScale.black} 0%,
          rgb(47 47 51 / 89%) 13.84%,
          rgb(72 72 75 / 79%) 28.59%,
          rgb(91 91 94 / 71%) 36.9%,
          rgb(129 129 131 / 54%) 51.65%,
          rgb(179 179 181 / 33%) 69.18%,
          rgb(255 255 255 / 0%) 93.84%
        )`};
  transition:
    height 0.3s ease,
    background 0.3s ease;
`;

export const CategoryWrap = styled.div<HeaderProps>`
  position: absolute;
  top: 4.125rem; /* 3.875rem + 0.25rem */
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
