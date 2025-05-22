import styled from 'styled-components';

export const Container = styled.div<{ $width?: string; $activeStyle?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${(props) => {
    if (props.$width) return props.$width;
    return '20.9375rem';
  }};
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  overflow: hidden;

  ${(props) =>
    props.$activeStyle &&
    `
    &:active {
      background-color: ${props.theme.colors.grayScale.gy900};
    }
  `}
`;

export const MenuContainer = styled.div<{ $width?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => {
    if (props.$width) return props.$width;
    return '20.9375rem';
  }};
  gap: 1.25rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.black};
`;

export const Image = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy300};
`;

export const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  flex-grow: 1;
  min-width: 0;
  gap: 0.25rem;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  width: 100%;
  overflow: hidden;
  min-width: 0;
`;

// Title:
// max-width: 8.8125rem 유지
// flex: 0 1 auto 추가 (grow: 0, shrink: 1, basis: auto)
// grow: 0 - 여분의 공간이 있어도 늘어나지 않음
// shrink: 1 - 공간이 부족할 때 줄어들 수 있음
// basis: auto - 컨텐츠 크기를 기본으로 함

// SubTitle:
// flex: 0 0 auto 설정 (grow: 0, shrink: 0, basis: auto)
// grow: 0 - 여분의 공간이 있어도 늘어나지 않음
// shrink: 0 - 공간이 부족해도 줄어들지 않음
// basis: auto - 컨텐츠 크기를 기본으로 함

export const Title = styled.p`
  ${(props) => props.theme.fonts.header.h4}
  color: ${(props) => props.theme.colors.grayScale.white};
  max-width: 8.8125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  flex: 0 1 auto;
`;

export const TitleDivider = styled.div`
  width: 0.063rem;
  height: 1rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy800};
  flex-shrink: 0;
`;

export const SubTitle = styled.span`
  ${(props) => props.theme.fonts.body.medium400}
  color: ${(props) => props.theme.colors.grayScale.gy700};
  white-space: nowrap;
  flex: 0 0 auto;
`;

export const ContentsFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
`;

export const Organization = styled.p`
  ${(props) => props.theme.fonts.body.small400}
  color: ${(props) => props.theme.colors.grayScale.white};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`;

export const TimeWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

export const TimeIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
`;

export const Time = styled.p`
  ${(props) => props.theme.fonts.body.xsmall400}
  color: ${(props) => props.theme.colors.grayScale.white};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 10rem;
`;

export const Pickup = styled.div`
  display: flex;
  width: 3.75rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.625rem;
  background-color: ${(props) => props.theme.colors.primary.bl400};
  ${(props) => props.theme.fonts.body.xsmall400};
  border-radius: 0.375rem;
  color: ${(props) => props.theme.colors.grayScale.black};
  flex-shrink: 0;
`;

export const LinkToDetail = styled.div`
  display: flex;
  width: 3.75rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.625rem;
  background-color: ${(props) => props.theme.colors.secondary.pk100};
  ${(props) => props.theme.fonts.body.xsmall400};
  border-radius: 0.375rem;
  color: ${(props) => props.theme.colors.grayScale.black};
  flex-shrink: 0;
`;

export const MenuTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  flex-grow: 1;
  min-width: 0;
  gap: 0.125rem;
`;

export const MenuDescription = styled.p`
  ${(props) => props.theme.fonts.body.xsmall400}
  color: ${(props) => props.theme.colors.grayScale.white};
  height: 2.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 14rem;
  text-align: left;
  margin-bottom: auto;
`;

export const Price = styled.p`
  ${(props) => props.theme.fonts.body.small500}
  color: ${(props) => props.theme.colors.grayScale.white};
  text-align: right;
  margin-left: auto;
  margin-top: auto;
  flex-shrink: 0;
`;
