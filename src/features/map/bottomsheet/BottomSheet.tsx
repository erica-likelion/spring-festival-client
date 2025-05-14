import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import * as S from './BottomSheet.styles';
import { BottomSheetProps } from './BottomSheet.types';
import { Notification } from '@/components/notification';
import { DummyData } from '@/constants/map/DummyData';
import { ImageTextFrameWithTime } from '@/components/image-text-frame';
import { useNotificationStore } from '@/stores/useNotificationStore';
import { CATEGORY_NOTIFICATIONS } from '@/constants/map/CategoryNotifications';
import { days } from '@/constants/map';

/**
 * 바텀시트 컴포넌트
 *
 * 모바일 인터페이스에서 화면 하단에서 올라오는 시트 컴포넌트입니다.
 * 헤더 부분을 드래그하여 위아래로 이동 가능하며, 콘텐츠 영역은 스크롤이 가능합니다.
 * 카테고리 선택 시 관련 정보를 표시하거나 커스텀 콘텐츠를 children으로 전달할 수 있습니다.
 *
 * @component
 * @param {Object} props - 컴포넌트 속성
 * @param {CATEGORIES|null} props.selectedCategory - 선택된 카테고리
 * @param {DAYS} [props.selectedDay=days[0]] - 선택된 날짜 (기본값: 첫 번째 날)
 * @param {ReactNode} [props.children] - 바텀시트 내부에 표시할 커스텀 컨텐츠
 *
 * @example
 * // 기본 사용법
 * <BottomSheet selectedCategory="주점" selectedDay="1일차" />
 *
 * @example
 * // 커스텀 콘텐츠를 포함한 사용법
 * <BottomSheet selectedCategory="주점" selectedDay="1일차">
 *   <CustomContent />
 * </BottomSheet>
 */
export default function BottomSheet({
  selectedCategory,
  selectedDay = days[0],
  children,
}: BottomSheetProps) {
  const navigate = useNavigate();
  const { sheet, content, header } = useBottomSheet();
  // Zustand 스토어에서 Notification 관련 상태 및 액션 가져오기

  // 알림이 닫혔는지 여부를 확인하는 상태
  const { isNotificationClosed, closeNotification } = useNotificationStore();
  // 현재 카테고리에 대한 notification 표시 여부 상태
  const [showNotification, setShowNotification] = useState<boolean>(false);

  // 선택된 카테고리의 알림 표시 상태 관리
  useEffect(() => {
    if (selectedCategory) {
      const notification = CATEGORY_NOTIFICATIONS[selectedCategory];
      const isClosed = isNotificationClosed(selectedCategory);
      setShowNotification(!!notification && !isClosed);
    } else {
      setShowNotification(false);
    }
  }, [selectedCategory, isNotificationClosed]);

  // selectedCategory가 null이 아닌 경우에만 데이터 필터링
  const filteredData = selectedCategory ? DummyData[selectedDay]?.[selectedCategory] || [] : [];

  // 알림 클릭 핸들러 - 경로로 이동
  const handleNotificationClick = useCallback(() => {
    if (selectedCategory && CATEGORY_NOTIFICATIONS[selectedCategory]?.path) {
      navigate(CATEGORY_NOTIFICATIONS[selectedCategory].path);
    }
  }, [selectedCategory, navigate]);

  // 알림 닫기 핸들러
  const handleCloseNotification = useCallback(() => {
    if (selectedCategory) {
      closeNotification(selectedCategory);
      setShowNotification(false);
    }
  }, [selectedCategory, closeNotification]);

  if (!selectedCategory) return null;

  // 카테고리별 알림 데이터 가져오기
  const notification = CATEGORY_NOTIFICATIONS[selectedCategory];

  return (
    <>
      <S.BottomSheetMotionDiv ref={sheet}>
        <S.BottomSheetHeader ref={header}>
          <S.Handle />
        </S.BottomSheetHeader>
        <S.BottomSheetContent ref={content}>
          {children ? (
            children
          ) : (
            <>
              {/* 기본 바텀시트 내용 (children이 없을 경우) */}
              {/* 카테고리별 공지사항 - onClick으로 경로 이동 처리 */}
              {showNotification && notification && (
                <Notification
                  title={notification.title}
                  onClick={handleNotificationClick}
                  onClose={handleCloseNotification}
                  width="20.9375rem"
                />
              )}

              {filteredData.length > 0
                ? filteredData.map((item, index) => (
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
                : selectedCategory && (
                    <S.NoDataMessage>해당 카테고리의 데이터가 없습니다.</S.NoDataMessage>
                  )}
            </>
          )}
        </S.BottomSheetContent>
      </S.BottomSheetMotionDiv>
    </>
  );
}
