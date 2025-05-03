import { useLocation } from 'react-router-dom';
import SongIcon from '@/assets/icons/song.svg?react';
import ClockIcon from '@/assets/icons/nrk_time.svg?react';
import * as S from './PerformanceDetail.styles';
import { PerformanceDetailsProps } from './PerformanceDetail.types';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect } from 'react';
import { NavBar } from '@/components/nav-bar/NavBar';
import React from 'react';

/**
 * 공연 상세 페이지 컴포넌트
 *
 * React Router의 `Link` 컴포넌트에서 `state`로 전달된 공연 정보를 기반으로 렌더링됩니다.
 *
 * 전달 데이터 구조 (`PerformanceDetailsProps`):
 * - backgroundUrl: 배경 이미지 URL
 * - singer: 가수 이름
 * - time: 공연 시간 (예: "21:00~22:00")
 * - description: 가수 설명
 * - songList: 대표곡 리스트 (이미지, 곡명, 외부 URL 포함)
 *
 * @returns JSX.Element
 */

export default function PerformanceDetail() {
  const { state } = useLocation() as { state: PerformanceDetailsProps };
  const { backgroundUrl, singer, time, description, songList } = state;
  const setIsNav = useLayoutStore((state) => state.setIsNav);

  useEffect(() => {
    setIsNav(false);
    return () => {
      setIsNav(true);
    };
  }, [setIsNav]);

  return (
    <S.DetailsContainer>
      <NavBar isBack={true} title="공연정보" isSearch={false} />
      <S.ImageWrap $url={backgroundUrl}>
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
            <React.Fragment key={index}>
              <S.SongBox key={index}>
                <S.Wrap>
                  <S.SongImage src={song.image} />
                  <S.SongName key={index}>{song.name}</S.SongName>
                </S.Wrap>
                <SongIcon
                  width={'1.5rem'}
                  height={'1.5rem'}
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open(song.url, '_blank')}
                />
              </S.SongBox>
              <S.SongLine />
            </React.Fragment>
          ))}
        </S.SongWrap>
      </S.TitleSongWrap>
    </S.DetailsContainer>
  );
}
