import { NavBar } from '@/components/nav-bar';
import * as S from './LostPost.styles';
import LocationIcon from '@/assets/icons/geopoint_56.svg?react';
import { ColorButton } from '@/components/colorbuttons';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect } from 'react';
import { LostItemDetailProps } from './LostPost.types';

/**
 * 분실물 상세 정보를 보여주는 컴포넌트
 *
 * 이미지, 물건 이름, 습득 장소, 시간, 설명 등을 표시하며
 * STAFF 전달 여부에 따라 뱃지를 조건부로 렌더링합니다.
 *
 * @component
 * @param {LostItemDetailProps} props - 분실물 상세 데이터
 * @param {string} props.imageUrl - 분실물 이미지 경로
 * @param {string} props.name - 분실물 이름
 * @param {boolean} props.isDeliveredToStaff - STAFF에게 전달 여부
 * @param {string} props.location - 습득 장소
 * @param {string} props.day - 습득 일자 (예: "1일차")
 * @param {string} props.time - 습득 시간 범위 (예: "16:00~18:00")
 * @param {string} props.description - 분실물 상세 설명
 *
 * @returns {JSX.Element} 분실물 상세 페이지 UI
 */

export default function LostPost({
  imageUrl,
  name,
  isDeliveredToStaff,
  location,
  day,
  time,
  description,
}: LostItemDetailProps) {
  const setIsNav = useLayoutStore((state) => state.setIsNav);

  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  return (
    <S.LostPostContainer>
      <NavBar isBack={true} title="분실물 보기" isSearch={false} />
      <S.LostPostContent>
        <S.ImageNameWrap>
          <S.LostImageBox $image={imageUrl as string} />
          <S.NameBox>
            <S.NameText>{name}</S.NameText>
            {isDeliveredToStaff && <p>staff전달</p>}
          </S.NameBox>
        </S.ImageNameWrap>
        <S.LocationWrap>
          <S.LocationTitle>습득 장소</S.LocationTitle>
          <S.LocationBox>
            <LocationIcon width={'1.125rem'} height={'1.125rem'} />
            <S.LocationText>{location}</S.LocationText>
          </S.LocationBox>
        </S.LocationWrap>
        <S.TimeWrap>
          <S.TimeTitle>습득 시간</S.TimeTitle>
          <S.TimeDayWrap>
            <S.DayBox>
              <S.DayTitle>습득 일자</S.DayTitle>
              <ColorButton label={day} backgroundColor="bl400" />
            </S.DayBox>
            <S.TimeBox>
              <S.TimeTitle>습득 시간</S.TimeTitle>
              <S.TimeText>{time}</S.TimeText>
            </S.TimeBox>
          </S.TimeDayWrap>
        </S.TimeWrap>
        <S.LostItemDescriptionWrap>
          <S.DescriptionTitle>물건 설명</S.DescriptionTitle>
          <S.DescriptionBox>
            <S.DescriptionText>{description}</S.DescriptionText>
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
