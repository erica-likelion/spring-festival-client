import { NavBar } from '@/components/nav-bar';
import * as S from './LostPost.styles';
import LocationIcon from '@/assets/icons/geopoint.svg?react';
import { lostItemsByDay } from '@/constants/lost/LostItems';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect, useMemo } from 'react';
import { LostItemDetailProps } from './LostPost.types';
import { StaffLabel } from '@/features/lost';
import { theme } from '@/styles/theme';
import { useParams } from 'react-router-dom';

/**
 * 분실물 상세 정보를 보여주는 페이지 컴포넌트
 *
 * - `/main/lost/post/:id` 형식의 경로로 접근
 * - URL 파라미터로 받은 `id`를 기반으로 분실물 데이터를 조회함
 * - 이미지, 이름, 장소, 시간, 설명, STAFF 여부 등을 표시
 *
 * @returns {JSX.Element} 분실물 상세 페이지 UI
 */

export default function LostPost() {
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  const { id } = useParams();
  const item = useMemo(() => {
    const allItems = Object.values(lostItemsByDay).flat();
    return allItems.find((i) => i.id === Number(id));
  }, [id]) as LostItemDetailProps;

  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  return (
    <S.LostPostContainer>
      <NavBar isBack={true} title="분실물 보기" isSearch={false} />
      <S.LostPostContent>
        {/* 이미지 및 제목 */}
        <S.ImageNameWrap>
          <S.LostImageBox $image={item?.imageUrl as string} />
          <S.NameBox>
            <S.NameText>{item?.name}</S.NameText>
            {item.isDeliveredToStaff && <StaffLabel absolute={false} />}
          </S.NameBox>
        </S.ImageNameWrap>
        {/* 습득 장소 */}
        <S.LocationWrap>
          <S.Title>습득 장소</S.Title>
          <S.LocationBox>
            <LocationIcon
              width={'1.125rem'}
              height={'1.125rem'}
              fill={theme.colors.grayScale.gy400}
            />
            <S.LocationText>{item?.location}</S.LocationText>
          </S.LocationBox>
        </S.LocationWrap>
        {/* 습득 시간 */}
        <S.TimeWrap>
          <S.Title>습득 시간</S.Title>
          <S.TimeDayWrap>
            <S.DayBox>
              <S.DayTitle>습득 일자</S.DayTitle>
              <S.DayBorder>
                <S.DayText>{item?.day}</S.DayText>
              </S.DayBorder>
            </S.DayBox>
            <S.TimeBox>
              <S.TimeTitle>습득 시간</S.TimeTitle>
              <S.TimeText>{item?.time}</S.TimeText>
            </S.TimeBox>
          </S.TimeDayWrap>
        </S.TimeWrap>
        {/* 물건 설명 */}
        <S.LostItemDescriptionWrap>
          <S.Title>물건 설명</S.Title>
          <S.DescriptionBox>
            <S.DescriptionText>{item.description}</S.DescriptionText>
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
