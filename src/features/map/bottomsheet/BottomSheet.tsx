/**
 * 지도 페이지의 드래그 가능한 바텀 시트 컴포넌트
 *
 * 지도 하단에서 올라오며 사용자가 헤더를 드래그하여 높이를 조절할 수 있습니다.
 * 선택된 날짜와 카테고리에 따라 동적으로 콘텐츠를 표시합니다.
 *
 * @features
 * - 터치 및 마우스 드래그 지원
 * - 최소/최대 높이 제한
 * - 카테고리별 콘텐츠 필터링
 * - 빈 데이터 상태 처리
 *
 * @example
 * <MapPageBottomSheet
 *   isBottomSheetOpen={true}
 *   selectedDay={selectedDay}
 *   selectedCategory={selectedCategory}
 *   currentHeight={currentHeightRem}
 *   onHeightChange={updateBottomSheetHeight}
 *   isDragging={isDragging}
 *   startY={startY}
 *   onDragStart={handleBottomSheetDragStart}
 *   onDragEnd={handleBottomSheetDragEnd}
 * />
 */
import { useRef, useEffect, useCallback, TouchEvent, MouseEvent as ReactMouseEvent } from 'react';
import { MapPageBottomSheetProps } from './BottomSheet.types';
import { Notification } from '@/components/notification';
import * as S from './BottomSheet.styles';
import { ImageTextFrameWithTime } from '@/components/image-text-frame';
import {
  MIN_BOTTOM_SHEET_HEIGHT_REM,
  TOP_NAVIGATION_HEIGHT_REM,
} from '@/constants/map/BottomSheet';
import { useUnitConversion } from '@/hooks/useUnitConversion';

import { DummyData } from '@/constants/map/DummyData';

export default function MapPageBottomSheet({
  isBottomSheetOpen,
  selectedDay,
  selectedCategory,
  currentHeight,
  onHeightChange,
  isDragging,
  startY,
  onDragStart,
  onDragEnd,
}: MapPageBottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);

  const minHeightRem = MIN_BOTTOM_SHEET_HEIGHT_REM;

  const { pxToRem, remToPx } = useUnitConversion();

  // 최대 높이 계산 함수
  const calculateMaxHeightRem = useCallback(() => {
    return pxToRem(window.innerHeight - remToPx(TOP_NAVIGATION_HEIGHT_REM));
  }, [pxToRem, remToPx]);

  // 높이 업데이트 함수
  const updateHeight = useCallback(
    (newHeightRem: number) => {
      const maxHeightRem = calculateMaxHeightRem();

      // 최소/최대 높이 범위 내에서만 조절
      if (newHeightRem < minHeightRem) {
        onHeightChange(minHeightRem);
      } else if (newHeightRem > maxHeightRem) {
        onHeightChange(maxHeightRem);
      } else {
        onHeightChange(newHeightRem);
      }
    },
    [minHeightRem, onHeightChange, calculateMaxHeightRem],
  );

  // 전역 마우스 이벤트 핸들러 설정
  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e: globalThis.MouseEvent) => {
        const diff = startY - e.clientY;
        const diffRem = pxToRem(diff);
        updateHeight(currentHeight + diffRem);
      };

      const handleMouseUp = () => {
        onDragEnd();
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, startY, currentHeight, updateHeight, pxToRem, onDragStart, onDragEnd]);

  // 드래그 시작 - 터치 이벤트
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    onDragStart(e.touches[0].clientY);
  };

  // 드래그 중 - 터치 이벤트
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentY = e.touches[0].clientY;
    const diff = startY - currentY;

    // 현재 높이 업데이트 (픽셀 차이를 rem으로 변환)
    const diffRem = pxToRem(diff);
    updateHeight(currentHeight + diffRem);

    // 스타트 포인트 업데이트
    onDragStart(currentY);
  };

  // 드래그 시작 - 마우스 이벤트
  const handleMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    onDragStart(e.clientY);
    e.preventDefault(); // 텍스트 선택 방지
  };

  if (!isBottomSheetOpen || !selectedCategory) return null;

  const filteredData = DummyData[selectedDay][selectedCategory] || [];

  return (
    <S.BottomSheetOverlay>
      <S.BottomSheetContainer ref={sheetRef} $height={currentHeight}>
        <S.Header
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={onDragEnd}
          onMouseDown={handleMouseDown}
        >
          <S.DragHandle />
        </S.Header>
        <Notification title="bottomsheetnotification" />
        <S.Body>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <S.ContentUnitWrap key={index} $isLastItem={index === filteredData.length - 1}>
                <ImageTextFrameWithTime
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  time={item.time}
                  canPickup={item.canPickup}
                />
              </S.ContentUnitWrap>
            ))
          ) : (
            <S.NoDataMessage>
              {selectedCategory} 카테고리에 해당하는 항목이 없습니다.
            </S.NoDataMessage>
          )}
        </S.Body>
      </S.BottomSheetContainer>
    </S.BottomSheetOverlay>
  );
}
