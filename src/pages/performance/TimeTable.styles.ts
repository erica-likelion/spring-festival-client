import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
from {
  opacity: 0;
  transform: translateY(20%);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4.37rem;
  width: 100%;
  position: relative;
`;

export const TimeWrap = styled.div`
  display: flex;
  width: 20.9375rem;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  flex: 1;
  margin-top: 3.5rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const TimeBoxWrap = styled.div`
  display: flex;
  height: 6rem;
  padding: 0.5rem;
  align-items: flex-start;
  align-self: stretch;
`;

export const TimeTable = styled.div`
  position: absolute;
  top: -0.23rem;
  left: 0;
  display: flex;
  width: 20.9375rem;
  gap: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
  z-index: -1;
`;

export const BoxWrap = styled.div<{ $isFirst?: boolean; $block?: number }>`
  display: flex;
  height: ${({ $block = 1 }) => {
    const duration = $block * 5; // minutes
    let heightRem = duration / 5; // base height in rem

    if (duration > 30) {
      const extra = Math.floor(duration / 15) - 2;
      heightRem += 0.25 * extra;
    } else if (duration < 20) {
      const deduction = 4 - Math.floor(duration / 5);
      heightRem -= 0.25 * deduction;
    }

    return `${heightRem}rem`;
  }};
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  margin-top: ${({ $isFirst }) => ($isFirst ? '0.5rem' : '0rem')};
  animation: ${slideUp} 0.3s ease-in-out;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;
`;

export const TimeBox = styled.div<{ $isActive: boolean; $isEmpty?: boolean }>`
  width: 4.5rem;
  align-self: stretch;
  border-radius: 0.75rem 0rem 0rem 0.75rem;
  background-color: ${({ $isActive, $isEmpty, theme }) =>
    $isEmpty
      ? 'transparent'
      : $isActive
        ? theme.colors.primary.bl400
        : theme.colors.grayScale.gy800};
`;

export const TimeText = styled.p`
  ${(props) => props.theme.fonts.body.medium500};
  color: ${({ theme }) => theme.colors.grayScale.white};
`;

export const ContentBox = styled.div<{ $isActive: boolean; $isEmpty?: boolean }>`
  display: flex;
  width: 16.4375rem;
  padding: 0.25rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 0rem 0.75rem 0.75rem 0rem;
  background-color: ${({ $isActive, $isEmpty, theme }) =>
    $isEmpty
      ? 'transparent'
      : $isActive
        ? 'rgba(79, 117, 249, 0.30)'
        : theme.colors.grayScale.gy900};
`;

export const PerformanceName = styled.p`
  color: ${({ theme }) => theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.body.large500};
`;

export const PerformanceTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.375rem;
  ${(props) => props.theme.fonts.body.small500};
  color: ${({ theme }) => theme.colors.grayScale.white};
`;

export const Divider = styled.div`
  display: flex;
  height: 0.5rem;
  padding: 0rem 0.125rem;
  flex-direction: column;
  align-items: flex-start;
`;

export const Line = styled.div`
  width: 4.38rem;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grayScale.gy900};
`;

export const TabNavWrap = styled.div`
  position: fixed;
  top: 3.875rem;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.grayScale.black};
  z-index: 100;
`;
