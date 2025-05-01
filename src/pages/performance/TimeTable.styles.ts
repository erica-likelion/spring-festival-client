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
`;

export const TimeWrap = styled.div`
  display: flex;
  width: 20.375rem;
  padding: 0rem 0.8125rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6175rem;
  margin-top: 1.13rem;
  position: relative;
`;

export const TimeTable = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  display: flex;
  width: 20.4375rem;
  flex-direction: column;
  align-items: flex-start;
  z-index: -1;
`;

export const BoxWrap = styled.div<{ isFirst?: boolean; block?: number }>`
  display: flex;
  height: ${({ block = 1 }) =>
    block === 1 ? '5.8125rem' : `calc(5.8125rem + ${(block - 1) * 5.58}rem)`};
  padding: 0.375rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  margin-top: ${({ isFirst }) => (isFirst ? '0' : '-0.375rem')};
  animation: ${slideUp} 0.3s ease-in-out;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 0;
`;

export const TimeBox = styled.div<{ isActive: boolean; isEmpty?: boolean }>`
  display: flex;
  width: 3.375rem;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.75rem 0rem 0rem 0.75rem;
  background-color: ${({ isActive, isEmpty, theme }) =>
    isEmpty ? 'transparent' : isActive ? theme.colors.primary.bl400 : theme.colors.grayScale.gy700};
`;

export const Time = styled.p`
  align-self: stretch;
  width: 23.4375rem;
  height: 4.85rem;
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${({ theme }) => theme.colors.grayScale.white};
`;

export const TimeGap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 3.6875rem;
  align-self: stretch;
`;

export const ContentBox = styled.div<{ isActive: boolean; isEmpty?: boolean }>`
  display: flex;
  width: 17.0625rem;
  padding: 0.6875rem 1.25rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0rem 0.75rem 0.75rem 0rem;
  background-color: ${({ isActive, isEmpty, theme }) =>
    isEmpty ? 'transparent' : isActive ? 'rgba(79, 117, 249, 0.30)' : theme.colors.grayScale.gy900};
`;

export const PerformanceNameTimeBox = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.1875rem;
`;

export const PerformanceName = styled.p`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.grayScale.white};
  ${(props) => props.theme.fonts.body.large500};
`;

export const PerformanceTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.375rem;
  ${(props) => props.theme.fonts.body.xsmall400};
  color: ${({ theme }) => theme.colors.grayScale.gy300};
`;

export const Divider = styled.div`
  width: 18.75rem;
  height: 0.0625rem;
  background-color: rgb(255 255 255 / 12%);
`;
