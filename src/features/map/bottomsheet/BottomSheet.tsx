import { useBottomSheet } from '@/hooks/useBottomSheet';
import * as S from './BottomSheet.styles';
import { BottomSheetProps } from './BottomSheet.types';
import { Notification } from '@/components/notification';
import { DummyData } from '@/constants/map/DummyData';
import { ImageTextFrameWithTime } from '@/components/image-text-frame';
import { days } from '@/constants/map';

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
