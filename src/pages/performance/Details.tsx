import { useLocation } from 'react-router-dom';
import SongIcon from '@/assets/icons/song.svg?react';
import ClockIcon from '@/assets/icons/nrk_time.svg?react';
import * as S from './Details.styles';
import { PerformanceDetailsProps } from './Details.types';
import { useLayoutStore } from '@/stores';
import { useEffect } from 'react';
import { NavBar } from '@/components/nav-bar/NavBar';

/**
 *
 * @param backgroundUrl 배경 이미지 URL string
 * @param singer 가수 이름 string
 * @param time 공연 시간 (ex: "21:00~22:00") string
 * @param description 가수 설명 string
 * @param songList 대표곡 리스트 Song[]
 * @returns {JSX.Element}
 */

export default function Details() {
  const { state } = useLocation() as { state: PerformanceDetailsProps };
  const { backgroundUrl, singer, time, description, songList } = state;
  const setIsNav = useLayoutStore((state) => state.setIsNav);

  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  const handleClick = () => {
    alert('곡 재생');
  };
  return (
    <S.DetailsContainer>
      <NavBar isBack={true} title="공연정보" isSearch={false} />
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
                  <S.SongImage src={song.image} />
                  <S.SongName key={index}>{song.name}</S.SongName>
                </S.Wrap>
                <SongIcon
                  width={'1.5rem'}
                  height={'1.5rem'}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleClick()}
                />
              </S.SongBox>
              <S.SongLine />
            </>
          ))}
        </S.SongWrap>
      </S.TitleSongWrap>
    </S.DetailsContainer>
  );
}
