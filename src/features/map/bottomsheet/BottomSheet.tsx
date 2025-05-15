import { useBottomSheet } from '@/hooks/useBottomSheet';
import * as S from './BottomSheet.styles';
import { BottomSheetProps } from './BottomSheet.types';
import { Notification } from '@/components/notification';
import { DummyData } from '@/constants/map/DummyData';
import { ImageTextFrameWithTime } from '@/components/image-text-frame';
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
  const { sheet, content, header } = useBottomSheet();

  // selectedCategory가 null이 아닌 경우에만 데이터 필터링
  const filteredData = selectedCategory ? DummyData[selectedDay]?.[selectedCategory] || [] : [];

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
              {selectedCategory && <Notification title={selectedCategory} width="100%" />}

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
