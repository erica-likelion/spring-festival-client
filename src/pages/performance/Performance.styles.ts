import styled from 'styled-components';
import HelpIcon from '@/assets/icons/nrk_help.svg?react';

export const PerformanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 12.631rem;
`;

export const InfoWrap = styled.div`
  display: flex;
  min-width: 20.9375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;
`;

export const TodayPerformanceText = styled.p`
  align-self: stretch;
  ${(props) => props.theme.fonts.header.h3};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const DayWrap = styled.div`
  display: flex;
  min-width: 20.9375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  margin-top: 1.5rem;
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const StartText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy400};
`;

export const HelpIconStyled = styled(HelpIcon)`
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;
  fill: ${(props) => props.theme.colors.grayScale.gy600};
`;

export const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
  margin-top: 1rem;
`;

export const TableNoteWrap = styled.div`
  display: flex;
  min-width: 20.9375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 2.5rem;
`;

export const FrameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.44rem;
`;

export const NoteText = styled.p`
  align-self: stretch;
  ${(props) => props.theme.fonts.header.h3};
  color: ${(props) => props.theme.colors.grayScale.white};
`;
