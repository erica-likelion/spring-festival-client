import { NavBar } from '@/components/nav-bar';
import * as S from './LostPost.styles';
import LocationIcon from '@/assets/icons/geopoint_56.svg?react';
import { ColorButton } from '@/components/colorbuttons';
import imageUrl from '@/assets/images/performance/day1-newjeans.webp';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect } from 'react';

export default function LostPost() {
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  useEffect(() => {
    console.log(imageUrl);
    setIsNav(false);
  }, [setIsNav]);

  return (
    <S.LostPostContainer>
      <NavBar isBack={true} title="분실물 보기" isSearch={false} />
      <S.LostPostContent>
        <S.ImageNameWrap>
          <S.LostImageBox $image={imageUrl as string} />
          <S.NameBox>
            <S.NameText>아이패드</S.NameText>
            <p>staff전달</p>
          </S.NameBox>
        </S.ImageNameWrap>
        <S.LocationWrap>
          <S.LocationTitle>습득 장소</S.LocationTitle>
          <S.LocationBox>
            <LocationIcon width={'1.125rem'} height={'1.125rem'} />
            <S.LocationText>잔디공원 앞 흔들그네</S.LocationText>
          </S.LocationBox>
        </S.LocationWrap>
        <S.TimeWrap>
          <S.TimeTitle>습득 시간</S.TimeTitle>
          <S.TimeDayWrap>
            <S.DayBox>
              <S.DayTitle>습득 일자</S.DayTitle>
              <ColorButton label="1일차" backgroundColor="bl400" />
            </S.DayBox>
            <S.TimeBox>
              <S.TimeTitle>습득 시간</S.TimeTitle>
              <S.TimeText>16:00~18:00</S.TimeText>
            </S.TimeBox>
          </S.TimeDayWrap>
        </S.TimeWrap>
        <S.LostItemDescriptionWrap>
          <S.DescriptionTitle>물건 설명</S.DescriptionTitle>
          <S.DescriptionBox>
            <S.DescriptionText>아이패드 배경화면이 굉장히 귀여움</S.DescriptionText>
          </S.DescriptionBox>
          <S.InfoText>
            * 분실물은 본인만 수령할 수 있습니다.
            <br />
            타인의 소지품을 임의로 가져갈 경우, 법적인 문제가 생길 수 있습니다.
          </S.InfoText>
        </S.LostItemDescriptionWrap>
      </S.LostPostContent>
    </S.LostPostContainer>
  );
}
