import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AlarmStateType {
  boothAlarm: boolean;
  performanceAlarm: { id: string; isAlarm: boolean }[]; // 공연 알림 목록 추가 시 타입 변경
}

interface AlarmActionType {
  setBoothAlarm: (isAlarm: boolean) => void;
  setPerformanceAlarm: (id: string, isAlarm: boolean) => void;
  getPerformanceAlarm: (id: string) => boolean;
}

/**
 * @description 알림 스토어
 * @param {AlarmStateType} state 알림 상태 타입
 * @param {AlarmActionType} actions 알림 액션 타입
 * @returns {AlarmStateType & AlarmActionType} 알림 상태 타입과 액션 타입을 반환
 */
export const useAlarmStore = create(
  persist<AlarmStateType & AlarmActionType>(
    (set, get) => ({
      boothAlarm: false,
      performanceAlarm: [], // 공연 알림 목록 추가 시 default 값 변경
      setBoothAlarm: (isAlarm) => set({ boothAlarm: isAlarm }),
      setPerformanceAlarm: (id, isAlarm) =>
        set((state) => {
          const updated = state.performanceAlarm.some((alarm) => alarm.id === id)
            ? state.performanceAlarm.map((alarm) =>
                alarm.id === id ? { ...alarm, isAlarm } : alarm,
              )
            : [...state.performanceAlarm, { id, isAlarm }];

          return { performanceAlarm: updated };
        }),
      getPerformanceAlarm: (id) =>
        get().performanceAlarm.find((alarm) => alarm.id === id)?.isAlarm ?? false,
    }),
    {
      name: 'alarm-storage', // 스토리지 이름
    },
  ),
);
