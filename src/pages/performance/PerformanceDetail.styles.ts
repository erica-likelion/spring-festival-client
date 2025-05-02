import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrap = styled.div<{ $url: string }>`
  display: flex;
  width: 23.4375rem;
  height: 32.375rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-image:
    linear-gradient(180deg, rgb(23 23 27 / 0%) 0%, #17171b 100%), url(${(props) => props.$url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;

export const ImageTextWrap = styled.div`
  display: flex;
  width: 20.7011rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const SingerTimeBox = styled.div`
  display: flex;
  height: 3.625rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.1875rem;
`;

export const Singer = styled.p`
  ${(props) => props.theme.fonts.header.h1};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const TimeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.375rem;
`;

export const Time = styled.p`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) => props.theme.colors.grayScale.gy300};
  text-align: center;
  white-space: nowrap;
`;

export const Description = styled.p`
  ${(props) => props.theme.fonts.body.small400};
  color: ${(props) => props.theme.colors.grayScale.gy400};
`;
export const TitleSongWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 20.7011rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const TitleSongText = styled.p`
  align-self: stretch;
  ${(props) => props.theme.fonts.header.h3};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const SongWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  align-self: stretch;
`;

export const SongBox = styled.div`
  display: flex;
  padding: 0.5rem 0rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`;

export const SongImage = styled.img`
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1/1;
  border-radius: 0.5rem;
  background: #c4c4c4;
`;

export const SongName = styled.p`
  ${(props) => props.theme.fonts.header.h4};
  color: ${(props) => props.theme.colors.grayScale.white};
`;

export const SongLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.grayScale.gy900};
`;
