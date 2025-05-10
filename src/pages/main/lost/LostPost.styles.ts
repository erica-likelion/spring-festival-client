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
  width: 20.9846rem;
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

export const Title = styled.p`
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
  align-self: stretch;
  ${(props) => props.theme.fonts.body.small500};
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

export const DayBorder = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 1.25rem;
  background-color: ${(props) => props.theme.colors.primary.bl400};
`;

export const DayText = styled.p`
  color: ${(props) => props.theme.colors.grayScale.black};
  text-align: center;
  text-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  ${(props) => props.theme.fonts.body.small400};
`;

export const TimeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
`;

export const TimeText = styled.div`
  display: flex;
  height: 2.75rem;
  padding: 0.625rem 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14.4375rem;
  border-radius: 0.75rem;
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
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
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
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
