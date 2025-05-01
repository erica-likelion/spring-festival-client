import { create } from 'zustand';

/**
 * 리프레시 상태의 타입을 정의하는 인터페이스
 */
interface RefreshStateType {
  /** 리프레시 버튼의 비활성화 상태 */
  disabled: boolean;
  /** 카운트다운의 남은 시간 (초) */
  count: number;
}

/**
 * 리프레시 관련 액션을 정의하는 인터페이스
 */
interface RefreshActionType {
  /**
   * 카운트다운을 시작하는 함수
   * @param seconds - 카운트다운을 시작할 초 단위 시간
   */
  startCountdown: (seconds: number) => void;
  /** 카운트다운을 초기화하고 리프레시 버튼을 활성화하는 함수 */
  clearCountdown: () => void;
}

/**
 * 리프레시 관련 상태와 액션을 관리하는 Zustand 스토어
 * @returns {RefreshStateType & RefreshActionType} 리프레시 상태와 액션을 포함한 스토어 객체
 */
export const useRefreshStore = create<RefreshStateType & RefreshActionType>((set) => {
  let interval: NodeJS.Timeout;

  return {
    disabled: false,
    count: 0,
    startCountdown: (seconds: number) => {
      clearInterval(interval);
      set({ disabled: true, count: seconds });
      interval = setInterval(() => {
        set((state) => {
          if (state.count <= 1) {
            clearInterval(interval);
            return { disabled: false, count: 0 };
          }
          return { ...state, count: state.count - 1 };
        });
      }, 1000);
    },
    clearCountdown: () => {
      clearInterval(interval);
      set({ disabled: false, count: 0 });
    },
  };
});
