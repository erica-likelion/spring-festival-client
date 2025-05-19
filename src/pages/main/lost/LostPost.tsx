import { NavBar } from '@/components/nav-bar';
import * as S from './LostPost.styles';
import LocationIcon from '@/assets/icons/geopoint.svg?react';
import { useLayoutStore } from '@/stores/useLayoutStore';
import { useEffect, useState } from 'react';
import { StaffLabel } from '@/features/lost';
import { theme } from '@/styles/theme';
import { useParams } from 'react-router-dom';
import { LostItem } from '@/features/lost/components/main/ItemList.types';

/**
 * 분실물 상세 정보를 보여주는 페이지 컴포넌트
 *
 * - `/main/lost/post/encode` 형식의 경로로 접근
 * - 이미지, 이름, 장소, 시간, 설명, STAFF 여부 등을 표시
 *
 * @returns {JSX.Element} 분실물 상세 페이지 UI
 */

export default function LostPost() {
  const setIsNav = useLayoutStore((state) => state.setIsNav);
  const { id } = useParams();
  const [item, setItem] = useState<LostItem | null>(null);
  useEffect(() => {
    try {
      const parsed = JSON.parse(decodeURIComponent(id || ''));
      setItem(parsed);
    } catch (err) {
      console.error('❌ 분실물 데이터 복원 실패:', err);
    }
  }, [id]);

  useEffect(() => {
    setIsNav(false);
  }, [setIsNav]);

  return (
    <S.LostPostContainer>
      <NavBar isBack={true} title="분실물 보기" isSearch={false} />
      <S.LostPostContent>
        {/* 이미지 및 제목 */}
        <S.ImageNameWrap>
          <S.LostImageBox $image={`${item?.image}`} />
          <S.NameBox>
            <S.NameText>{item?.name}</S.NameText>
            {item?.staffNotified && <StaffLabel absolute={false} />}
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
            <S.LocationText>{item?.foundLocation}</S.LocationText>
          </S.LocationBox>
        </S.LocationWrap>
        {/* 습득 시간 */}
        <S.TimeWrap>
          <S.Title>습득 시간</S.Title>
          <S.TimeDayWrap>
            <S.DayBox>
              <S.DayTitle>습득 일자</S.DayTitle>
              <S.DayBorder>
                <S.DayText>{item?.foundDate}</S.DayText>
              </S.DayBorder>
            </S.DayBox>
            <S.TimeBox>
              <S.TimeTitle>습득 시간</S.TimeTitle>
              <S.TimeText>{item?.foundTime}</S.TimeText>
            </S.TimeBox>
          </S.TimeDayWrap>
        </S.TimeWrap>
        {/* 물건 설명 */}
        <S.LostItemDescriptionWrap>
          <S.Title>물건 설명</S.Title>
          <S.DescriptionBox>
            <S.DescriptionText>{item?.description}</S.DescriptionText>
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
