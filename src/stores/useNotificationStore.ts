import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CATEGORIES } from '@/constants/map/CATEGORIES';
import { NOTIFICATION_STORAGE_KEY } from '@/constants/map/CategoryNotifications';

interface NotificationState {
  // 닫힌 알림을 추적하는 Record (카테고리를 키로, true면 닫힘)
  closedNotifications: Partial<Record<CATEGORIES, boolean>>;

  // 알림 닫기 액션
  closeNotification: (category: CATEGORIES) => void;

  // 알림 다시 열기 액션
  resetNotification: (category: CATEGORIES) => void;

  // 모든 알림 초기화 액션
  resetAllNotifications: () => void;

  // 알림이 닫혔는지 확인하는 함수
  isNotificationClosed: (category: CATEGORIES) => boolean;
}

// 초기 상태를 생성하는 함수
const createInitialState = (): Partial<Record<CATEGORIES, boolean>> => {
  // 모든 카테고리에 대해 기본값 false 설정 (또는 초기에는 비어있는 객체)
  return {};
};

// persist 미들웨어를 사용해 로컬 스토리지에 상태 저장
export const useNotificationStore = create<NotificationState>()(
  persist(
    (set, get) => ({
      // 초기 상태는 비어있는 객체 (모든 알림이 열려있음)
      closedNotifications: createInitialState(),

      closeNotification: (category) =>
        set((state) => ({
          closedNotifications: {
            ...state.closedNotifications,
            [category]: true,
          },
        })),

      resetNotification: (category) =>
        set((state) => {
          const updated = { ...state.closedNotifications };
          delete updated[category]; // 카테고리 항목 삭제하여 기본값으로 되돌림
          return { closedNotifications: updated };
        }),

      resetAllNotifications: () => set({ closedNotifications: {} }),

      isNotificationClosed: (category) => !!get().closedNotifications[category],
    }),
    {
      name: NOTIFICATION_STORAGE_KEY, // 로컬 스토리지 키
    },
  ),
);
