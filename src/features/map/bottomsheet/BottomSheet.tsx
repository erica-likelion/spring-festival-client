import { useBottomSheet } from '@/hooks/useBottomSheet';
import * as S from './BottomSheet.styles';

export default function BottomSheet() {
  const { sheet, content, header } = useBottomSheet();

  return (
    <>
      <S.BottomSheetMotionDiv ref={sheet}>
        <S.BottomSheetHeader ref={header}>
          <S.Handle />
        </S.BottomSheetHeader>
        <S.BottomSheetContent ref={content}>
          {/* 바텀시트 내용 */}
          <h3>바텀시트 내용</h3>
          <p>헤더 부분을 잡고 드래그할 수 있습니다. 내용 부분은 스크롤만 가능합니다.</p>
          <div style={{ height: '1000px', padding: '10px 0' }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i}>{i + 1}번 항목. 스크롤 테스트를 위한 내용</p>
            ))}
          </div>
        </S.BottomSheetContent>
      </S.BottomSheetMotionDiv>
    </>
  );
}
