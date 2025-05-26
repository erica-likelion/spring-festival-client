import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MapPageHeader, MapPageBottomSheet } from '@/features/map';
import { days, categories, DAYS, CATEGORIES } from '@/constants/map';
import { FESTIVAL_START_DATE, FESTIVAL_TOTAL_DAYS } from '@/constants/festival/dates';
import { getCurrentFestivalDay } from '@/utils/dateUtils';
import * as S from './MapPage.styles';
import { useLayoutStore } from '@/stores/useLayoutStore';
import ReCenterButtonIcon from '@/assets/icons/re-center.svg?react';
import ReCenterClickedButtonIcon from '@/assets/icons/re-center-clicked.svg?react';
import { useKakaoMap } from '@/hooks/useKakaoMap';
import { MapData, MapDataItem } from '@/constants/map/MapData';

export default function Map() {
  // URL에서 itemId 파라미터 가져오기
  const { itemId: itemIdParam } = useParams<{ itemId?: string }>();
  // 파라미터를 숫자로 변환
  const itemId = itemIdParam ? Number(itemIdParam) : undefined;
  const navigate = useNavigate();
  const mapRef = useRef<HTMLDivElement>(null);

  // 현재 날짜에 기반한 페스티벌 일차 계산
  const currentDay = getCurrentFestivalDay(FESTIVAL_START_DATE, FESTIVAL_TOTAL_DAYS) as DAYS;
  console.log(
    `[MapPage] 현재 날짜: ${new Date().toLocaleDateString()}, 페스티벌 시작 일차: ${FESTIVAL_START_DATE}, 페스티벌 일차: ${currentDay}`,
  );

  // 날짜 및 카테고리 관련 상태
  const [selectedDay, setSelectedDay] = useState<DAYS>(currentDay);
  const [selectedCategory, setSelectedCategory] = useState<CATEGORIES | null>(null);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const [backButtonVisible, setBackButtonVisible] = useState<boolean>(false);

  // 카카오맵 커스텀 훅 사용
  const { moveToCurrentLocation, showItemMarker, kakaoMap } = useKakaoMap(
    {
      mapRef,
      center: { lat: 37.294711, lng: 126.833163 }, // 대운동장
      level: 3,
      draggable: true,
      zoomable: true,
      scrollwheel: true,
      isBottomSheetOpen,
    },
    selectedCategory,
    selectedDay,
  );
  console.log('[MapPage] useKakaoMap 훅 초기화 완료');

  // 헤더 관련 상태
  const [headerExpanded, setHeaderExpanded] = useState<boolean>(false);
  const [showCategory, setShowCategory] = useState<boolean>(true);

  // itemId가 있을 경우 해당 아이템 자동 선택
  useEffect(() => {
    if (itemId && kakaoMap) {
      // 모든 카테고리에서 아이템 찾기
      let foundItem: MapDataItem | undefined;
      let foundCategory: CATEGORIES | null = null;

      // 모든 카테고리를 순회하며 itemId와 일치하는 항목 찾기
      Object.entries(MapData).some(([category, items]) => {
        const item = items.find((item) => item.id === itemId);
        if (item) {
          foundItem = item;
          foundCategory = category as CATEGORIES;
          return true; // 찾았으면 순회 중단
        }
        return false;
      });

      if (foundItem && foundCategory) {
        // 카테고리 설정 (이것이 바텀시트를 열고 마커 표시를 트리거함)
        setSelectedCategory(foundCategory);

        // 잠시 후 항목의 마커를 클릭한 효과를 보여줌
        setTimeout(() => {
          showItemMarker(foundItem as MapDataItem);
        }, 500); // 카테고리가 설정되고 마커가 표시될 시간을 주기 위해 지연
      }
    }
  }, [itemId, kakaoMap, showItemMarker]);

  useEffect(() => {
    if (selectedCategory) {
      setIsBottomSheetOpen(true);
    } else {
      setIsBottomSheetOpen(false);
    }
  }, [selectedCategory]);

  // 바텀시트가 열리면 하단 네비게이션 숨김 및 지도 리사이즈
  useEffect(() => {
    if (isBottomSheetOpen) {
      useLayoutStore.getState().setIsNav(false);
    } else {
      useLayoutStore.getState().setIsNav(true);
    }

    // 카카오맵 리사이즈 (timeout을 통해 DOM 업데이트 이후 실행)
    const timeoutId = setTimeout(() => {
      if (kakaoMap) {
        kakaoMap.relayout();
      }
    }, 300); // 바텀시트 애니메이션이 완료되는 시간과 맞춤

    // cleanup 함수로 timeout 제거
    return () => clearTimeout(timeoutId);
  }, [isBottomSheetOpen, kakaoMap]);

  // 페이지를 벗어날 때 네비게이션 바를 원상복구
  useEffect(() => {
    return () => {
      // 언마운트 시 네비게이션 바를 다시 표시
      useLayoutStore.getState().setIsNav(true);
    };
  }, []);

  useEffect(() => {
    if (headerExpanded) {
      setIsBottomSheetOpen(false);
    } else if (selectedCategory) {
      setIsBottomSheetOpen(true);
    }
  }, [headerExpanded, selectedCategory]);

  // 날짜 바꾸면 카테고리 초기화
  useEffect(() => {
    setSelectedCategory(null);
  }, [selectedDay]);

  // 카테고리나 아이템 선택되어있으면 뒤로가기 버튼 활성화
  useEffect(() => {
    if (selectedCategory) {
      setBackButtonVisible(true);
    } else {
      setBackButtonVisible(false);
    }
  }, [selectedCategory]);

  // 헤더 핸들러
  const handleDayChange = (day: DAYS) => {
    setSelectedDay(day);
    setHeaderExpanded(false);
  };

  const handleHeaderToggle = () => {
    if (headerExpanded) {
      setHeaderExpanded(false);
    } else {
      setHeaderExpanded(true);
    }
  };

  // useEffect와 동일한 로직을 함수로 변환
  const handleHeaderExpandChange = (expanded: boolean) => {
    if (expanded) {
      setShowCategory(false);
    } else {
      // 축소 시 드롭다운 애니메이션 후에 카테고리 표시
      setTimeout(() => {
        setShowCategory(true);
      }, 200); // 드롭다운 애니메이션 시간과 동일하게 설정
    }
  };

  const handleCategoryChange = (category: CATEGORIES | null) => {
    // 항상 먼저 초기화
    setSelectedCategory(null);
    setIsBottomSheetOpen(false);

    // URL 변경이 필요한 경우
    if (itemIdParam) {
      navigate('/map', { replace: true });
    }

    // 약간의 지연 후에 새 카테고리 선택 (이전 상태가 완전히 정리되도록)
    setTimeout(() => {
      setSelectedCategory(category);
      if (category) {
        setIsBottomSheetOpen(true);
      }
    }, 100);
  };

  const handleSearchClick = () => {
    navigate('/map/search', { replace: true });
  };

  // 현재 위치 버튼 관련 상태
  const [isReCentering, setIsReCentering] = useState<boolean>(false);

  // 현재 위치로 이동 핸들러
  const handleReCenterClick = () => {
    setIsReCentering(true); // 클릭 효과 활성화
    moveToCurrentLocation(); // 현재 위치로 이동

    // 일정 시간 후 버튼 상태 원래대로 복원
    setTimeout(() => {
      setIsReCentering(false);
    }, 1000);
  };

  // 뒤로가기 버튼 핸들러
  const handleBackButtonClick = () => {
    // 카테고리가 선택된 상태에서 뒤로가기 버튼 클릭 시
    if (selectedCategory) {
      setSelectedCategory(null); // 카테고리 초기화
      setIsBottomSheetOpen(false); // 바텀시트 닫기
      setBackButtonVisible(false); // 뒤로가기 버튼 숨기기

      // URL에 itemId가 있는 경우 기본 맵 URL로 변경
      if (itemIdParam) {
        navigate('/map', { replace: true });
      }

      return;
    }
  };

  console.log('[지도] MapPage 컴포넌트가 렌더링되었습니다.');

  return (
    <S.MapContainer>
      <S.MapWrapper ref={mapRef} $isBottomSheetOpen={isBottomSheetOpen} />
      <S.ReCenterButton $isBottomSheetOpen={isBottomSheetOpen} onClick={handleReCenterClick}>
        {isReCentering ? <ReCenterClickedButtonIcon /> : <ReCenterButtonIcon />}
      </S.ReCenterButton>
      <S.ContentContainer>
        <MapPageHeader
          days={days}
          selectedDay={selectedDay}
          onDayChange={handleDayChange}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onSearchClick={handleSearchClick}
          expanded={headerExpanded}
          onExpandToggle={handleHeaderToggle}
          showCategory={showCategory}
          onExpandChange={handleHeaderExpandChange}
          isBackVisible={backButtonVisible} // 뒤로가기 버튼 표시 여부
          onBackButtonClick={handleBackButtonClick} // 뒤로가기 버튼 핸들러 추가
        />
        {isBottomSheetOpen && (
          <S.BottomSheetContainer>
            <MapPageBottomSheet
              selectedCategory={selectedCategory}
              selectedDay={selectedDay}
              onItemClick={showItemMarker}
            />
          </S.BottomSheetContainer>
        )}
      </S.ContentContainer>
    </S.MapContainer>
  );
}
