import { useRef, useEffect } from 'react';
import { MIN_Y, MAX_Y } from '@/constants/map/BottomSheetOptions';

interface BottomSheetMetrics {
  touchStart: {
    sheetY: number;
    touchY: number;
  };
  touchMove: {
    prevTouchY?: number;
    movingDirection: 'none' | 'down' | 'up';
  };
  isContentAreaTouched: boolean;
  currentTranslateY: number;
}

export const useBottomSheet = () => {
  const sheet = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null); // 헤더 ref 추가
  const metrics = useRef<BottomSheetMetrics>({
    touchStart: {
      sheetY: 0,
      touchY: 0,
    },
    touchMove: {
      prevTouchY: 0,
      movingDirection: 'none',
    },
    isContentAreaTouched: false,
    currentTranslateY: 0,
  });

  // 직접 시트 위치 설정 함수
  const setSheetPosition = (translateY: number) => {
    if (!sheet.current) return;

    // 경계 체크
    if (translateY < MIN_Y - MAX_Y) translateY = MIN_Y - MAX_Y;
    if (translateY > 0) translateY = 0;

    metrics.current.currentTranslateY = translateY;
    sheet.current.style.transform = `translateY(${translateY}px)`;
  };

  useEffect(() => {
    if (!sheet.current || !content.current || !header.current) return;

    // 초기 위치 설정
    setSheetPosition(0); // 초기에 맨 아래로 설정

    // GPU 가속 활성화
    sheet.current.style.willChange = 'transform';

    const handleTouchStart = (e: TouchEvent) => {
      // 이벤트 전파 중지
      e.stopPropagation();

      // 이전 위치 유지
      const { touchStart } = metrics.current;
      touchStart.sheetY = sheet.current!.getBoundingClientRect().y;
      touchStart.touchY = e.touches[0].clientY;

      // 바텀 시트 터치 시작 시, body 스크롤 막기
      document.body.style.overflowY = 'hidden';

      console.log('헤더 드래그 시작', { y: touchStart.touchY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      // 이벤트 전파 중지
      e.stopPropagation();
      e.preventDefault();

      const { touchStart } = metrics.current;
      const currentTouch = e.touches[0];

      // 시작 위치로부터의 차이 계산 (아래로 드래그하면 양수, 위로 드래그하면 음수)
      const touchOffset = currentTouch.clientY - touchStart.touchY;

      // 기존 translateY 값에 offset을 직접 반영
      // 드래그 방향과 시트 이동 방향을 일치시킴
      // (아래로 드래그 -> 양수 offset -> 더 아래로 이동, 위로 드래그 -> 음수 offset -> 더 위로 이동)
      let newTranslateY = metrics.current.currentTranslateY + touchOffset;

      // 경계 체크 (직접적인 min/max translateY 값으로)
      const minTranslateY = MIN_Y - MAX_Y; // 시트가 최대로 올라갔을 때 (음수)
      const maxTranslateY = 0; // 시트가 최대로 내려갔을 때 (0)

      if (newTranslateY < minTranslateY) {
        newTranslateY = minTranslateY;
      } else if (newTranslateY > maxTranslateY) {
        newTranslateY = maxTranslateY;
      }

      console.log('헤더 드래그 중', {
        현재Y: metrics.current.currentTranslateY,
        드래그량: touchOffset,
        새Y: newTranslateY,
      });

      // 터치 시작 위치 업데이트 (연속적인 드래그를 위해)
      touchStart.touchY = currentTouch.clientY;

      // 위치 업데이트
      requestAnimationFrame(() => {
        setSheetPosition(newTranslateY);
      });

      // 바텀 시트 드래그 중 배경 스크롤 방지
      document.body.style.overflowY = 'hidden';
    };

    const handleTouchEnd = (e: TouchEvent) => {
      // 이벤트 전파 중지
      e.stopPropagation();

      console.log('헤더 드래그 종료');

      // 스크롤 설정 복원
      document.body.style.overflowY = 'auto';

      // 현재 translateY는 유지하고 나머지만 초기화
      metrics.current = {
        ...metrics.current,
        touchStart: {
          sheetY: 0,
          touchY: 0,
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: 'none',
        },
        isContentAreaTouched: false,
      };
    };

    // 헤더 요소에만 이벤트 리스너 연결
    const headerElement = header.current;
    headerElement.addEventListener('touchstart', handleTouchStart, { passive: false });
    headerElement.addEventListener('touchmove', handleTouchMove, { passive: false });
    headerElement.addEventListener('touchend', handleTouchEnd, { passive: false });

    // 마우스 이벤트 지원 (헤더에만 연결)
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault(); // 기본 동작 방지
      e.stopPropagation(); // 이벤트 전파 중지

      const { touchStart } = metrics.current;
      touchStart.sheetY = sheet.current!.getBoundingClientRect().y;
      touchStart.touchY = e.clientY;

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      document.body.style.userSelect = 'none';
      document.body.style.overflowY = 'hidden';

      console.log('헤더 마우스 다운', { y: e.clientY });
    };

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const { touchStart } = metrics.current;

      // 직관적인 드래그 방향 매핑 (터치와 동일)
      const mouseOffset = e.clientY - touchStart.touchY;
      let newTranslateY = metrics.current.currentTranslateY + mouseOffset;

      // 경계 체크
      const minTranslateY = MIN_Y - MAX_Y;
      const maxTranslateY = 0;

      if (newTranslateY < minTranslateY) {
        newTranslateY = minTranslateY;
      } else if (newTranslateY > maxTranslateY) {
        newTranslateY = maxTranslateY;
      }

      // 마우스 위치 업데이트 (연속적인 드래그를 위해)
      touchStart.touchY = e.clientY;

      console.log('헤더 마우스 이동', { newTranslateY });

      requestAnimationFrame(() => {
        setSheetPosition(newTranslateY);
      });
    };

    const handleMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      document.body.style.userSelect = '';
      document.body.style.overflowY = 'auto';

      console.log('헤더 마우스 업');

      metrics.current = {
        ...metrics.current,
        touchStart: {
          sheetY: 0,
          touchY: 0,
        },
        touchMove: {
          prevTouchY: 0,
          movingDirection: 'none',
        },
        isContentAreaTouched: false,
      };
    };

    // 마우스 이벤트도 헤더에만 연결
    headerElement.addEventListener('mousedown', handleMouseDown);

    return () => {
      headerElement.removeEventListener('touchstart', handleTouchStart);
      headerElement.removeEventListener('touchmove', handleTouchMove);
      headerElement.removeEventListener('touchend', handleTouchEnd);
      headerElement.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // 콘텐츠 영역은 더 이상 특별한 이벤트 처리가 필요 없음
  // 헤더에서만 드래그를 처리하기 때문

  const resetBottomSheet = () => {
    setSheetPosition(0); // 맨 아래로 이동
  };

  return { sheet, content, header, resetBottomSheet };
};
