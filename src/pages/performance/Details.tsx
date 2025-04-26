import TestImage from '@/assets/images/performance/day1-newjeans.webp';
import SongIcon from '@/assets/icons/song.svg?react';
import * as S from './Details.styles';

export default function Details() {
  const songList = ['Hurt', 'Love is Gone', 'Love is Gone (Acoustic)'];
  return (
    // Navbar
    <S.DetailsContainer>
      <S.Image src={TestImage} alt="newjins" width={'23.4888rem'} height={'29.375rem'} />
      <S.TitleSongWrap>
        <S.TitleSongText>대표곡</S.TitleSongText>
        <S.SongWrap>
          {songList.map((song, index) => (
            <S.SongBox key={index}>
              <S.Wrap>
                <S.SongImage />
                <S.SongName key={index}>{song}</S.SongName>
              </S.Wrap>
              <SongIcon width={'1.5rem'} height={'1.5rem'} />
            </S.SongBox>
          ))}
        </S.SongWrap>
      </S.TitleSongWrap>
    </S.DetailsContainer>
  );
}
