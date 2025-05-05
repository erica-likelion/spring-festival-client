import styled from 'styled-components';

export const LostPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4.37rem;
`;

export const LostPostContent = styled.div`
  display: flex;
  width: 20.9648rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  margin-top: 1.13rem;
`;

export const ImageNameWrap = styled.div`
  display: flex;
  width: 20.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const LostImageBox = styled.div<{ $image: string }>`
  width: 20.25rem;
  height: 27rem;
  border-radius: 0.75rem;
  background-image: url('${({ $image }) => $image}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: lightgray;
`;

export const NameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const NameText = styled.h2`
  ${(props) => props.theme.fonts.header.h3};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const LocationWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

export const LocationTitle = styled.p`
  ${(props) => props.theme.fonts.header.h4};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const LocationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
`;

export const LocationText = styled.p`
  ${(props) => props.theme.fonts.body.medium500};
  color: ${(props) => props.theme.colors.grayScale.gy500};
`;

export const TimeWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

export const TimeTitle = styled.p`
  ${(props) => props.theme.fonts.header.h4};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const TimeDayWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

export const DayBox = styled.div`
  display: flex;
  width: 3.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const DayTitle = styled.p`
  align-self: stretch;
  ${(props) => props.theme.fonts.body.small500};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const DayText = styled.span`
  background-color: #3578e5;
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
`;

export const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

export const TimeText = styled.div`
  align-self: stretch;
  ${(props) => props.theme.fonts.body.small500};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const LostItemDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

export const DescriptionTitle = styled.p`
  ${(props) => props.theme.fonts.header.h4};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const DescriptionBox = styled.div`
  display: flex;
  height: 10.25rem;
  padding: 1.125rem;
  align-items: flex-start;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy950};
`;

export const DescriptionText = styled.p`
  flex: 1 0 0;
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) => props.theme.colors.grayScale.gy200};
`;

export const InfoText = styled.p`
  width: 20.9375rem;
  ${(props) => props.theme.fonts.body.xsmall500};
  color: ${(props) => props.theme.colors.grayScale.gy400};
`;
