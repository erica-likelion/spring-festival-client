import TestImage from '@/assets/images/performance/day1-newjeans.webp';
import SongIcon from '@/assets/icons/song.svg?react';
import ClockIcon from '@/assets/icons/clock.svg?react';
import * as S from './Details.styles';

export default function Details() {
  const songList = ['Hurt', 'Love is Gone', 'Love is Gone (Acoustic)'];
  return (
    // Navbar
    <S.DetailsContainer>
      <S.ImageWrap backgroundUrl={TestImage}>
        <S.ImageTextWrap>
          <S.SingerTimeBox>
            <S.Singer>뉴진스</S.Singer>
            <S.TimeBox>
              <ClockIcon width={'1.125rem'} height={'1.125rem'} />
              <S.Time>21:00~22:00</S.Time>
            </S.TimeBox>
          </S.SingerTimeBox>
          <S.Description>
            NewJeans는 대한민국의 걸그룹이다. 민지, 하니, 다니엘, 해린, 혜인 5인조로 구성되어 있다.
            민희진이 프로듀싱을 맡았으며, 이들은 1990년대와 2000년대의 복고풍 레트로 음악 스타일을
            현대적 시대에 맞게 재구성한 그룹이다.
          </S.Description>
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
