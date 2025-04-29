import styled from 'styled-components';

export const PerformanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6.06rem;
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

export const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
  margin-top: 1rem;
`;

export const SingerTimeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  margin-top: 0.75rem;
`;

export const SingerName = styled.p`
  ${(props) => props.theme.fonts.header.h1};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const TimeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.375rem;
`;

export const TimeText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy300};
`;

export const AlertBox = styled.div`
  display: flex;
  padding: 0.25rem 0.75rem 0.25rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
`;

export const AlertText = styled.p`
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.white};
  text-align: center;
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
