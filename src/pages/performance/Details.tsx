import SongIcon from '@/assets/icons/song.svg?react';
import ClockIcon from '@/assets/icons/clock.svg?react';
import * as S from './Details.styles';
import { PerformanceDetailsProps } from './Details.types';

export default function Details({
  backgroundUrl,
  singer,
  time,
  description,
  songList,
}: PerformanceDetailsProps) {
  return (
    // Navbar
    <S.DetailsContainer>
      <S.ImageWrap backgroundUrl={backgroundUrl}>
        <S.ImageTextWrap>
          <S.SingerTimeBox>
            <S.Singer>{singer}</S.Singer>
            <S.TimeBox>
              <ClockIcon width={'1.125rem'} height={'1.125rem'} />
              <S.Time>{time}</S.Time>
            </S.TimeBox>
          </S.SingerTimeBox>
          <S.Description>{description}</S.Description>
        </S.ImageTextWrap>
      </S.ImageWrap>
      <S.TitleSongWrap>
        <S.TitleSongText>대표곡</S.TitleSongText>
        <S.SongWrap>
          {songList.map((song, index) => (
            <>
              <S.SongBox key={index}>
                <S.Wrap>
                  <S.SongImage />
                  <S.SongName key={index}>{song}</S.SongName>
                </S.Wrap>
                <SongIcon width={'1.5rem'} height={'1.5rem'} />
              </S.SongBox>
              <S.SongLine />
            </>
          ))}
        </S.SongWrap>
      </S.TitleSongWrap>
    </S.DetailsContainer>
  );
}
