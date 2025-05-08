import styled from 'styled-components';
import Arrow from '@/assets/icons/down-arrow.svg?react';

export const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

export const DayTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

export const DayButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const DayTimeText = styled.p`
  ${(props) => props.theme.fonts.body.small500};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const TimeSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

export const TimeSelectBox = styled.div`
  display: flex;
  height: 2.75rem;
  padding: 0.625rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14.4375rem;
  align-self: stretch;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
  position: relative;
`;

export const TimeSelectOption = styled.p`
  ${(props) => props.theme.fonts.body.small500};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const ArrowIcon = styled(Arrow)<{ $rotated?: boolean }>`
  position: absolute;
  right: 1.5rem;
  top: 0.62rem;
  transform: rotate(${(props) => (props.$rotated ? '180deg' : '0deg')});
  transition: transform 0.7s ease;
`;
