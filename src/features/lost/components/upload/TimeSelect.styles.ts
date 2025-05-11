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

export const TimeSelectBox = styled.div<{ $open: boolean }>`
  width: 100%;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.grayScale.gy900};
  overflow: hidden;
  transition: height 0.3s ease;
`;

export const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.5rem;
  cursor: pointer;
`;

export const ArrowIcon = styled(Arrow)<{ $rotated?: boolean }>`
  transform: rotate(${(props) => (props.$rotated ? '180deg' : '0deg')});
  transition: transform 0.7s ease;
`;

export const DropdownWrapper = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? '10rem' : '0')};
  overflow-y: auto;
  transition: max-height 0.7s ease;
  padding: 0rem 0.5rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TimeSelectOption = styled.p`
  ${(props) => props.theme.fonts.body.small500};
  color: ${({ theme }) => theme.colors.grayScale.white};
`;

export const DropdownItem = styled.div`
  display: flex;
  padding: 0.625rem 1rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayScale.gy800};
    border-radius: 0.75rem;
  }
`;
