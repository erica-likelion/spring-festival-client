import * as S from './Alert.styles';
import AlertIcon from '@/assets/icons/alert.svg?react';
import AlertFillIcon from '@/assets/icons/alert-filled.svg?react';
import { useAlarmStore } from '../stores/useAlarmStore';
import { registerArtistAlarm, releaseArtistAlarm } from '@/services/alarm';
/**
 * @component OpenAlert
 * @description 오픈 알림 버튼
 *
 * @example
 * ```tsx
 * <OpenAlert />
 * ```
 *
 * @returns {JSX.Element} 오픈 알림 토글 버튼
 */

export function OpenAlert() {
  const { boothAlarm, setBoothAlarm } = useAlarmStore();
  return (
    <S.Button
      whileTap={{ scale: 0.9, backgroundColor: '#212526' }}
      onClick={() => setBoothAlarm(!boothAlarm)}
    >
      {boothAlarm ? (
        <AlertFillIcon width={'1rem'} height={'1rem'} />
      ) : (
        <AlertIcon width={'1rem'} height={'1rem'} />
      )}
      <S.Text>오픈 알림 {boothAlarm ? '해제' : '받기'}</S.Text>
    </S.Button>
  );
}

/**
 * @component PerformanceAlert
 * @description 공연 알림 버튼
 *
 * @example
 * ```tsx
 * <PerformanceAlert id="newJeans" />
 * ```
 *
 * @returns {JSX.Element} 공연 알림 토글 버튼
 */
export function PerformanceAlert({ id }: { id: string }) {
  const { getPerformanceAlarm, setPerformanceAlarm } = useAlarmStore();
  const isAlarm = getPerformanceAlarm(id);

  const handleClick = async () => {
    const next = !isAlarm;
    try {
      if (next) {
        await registerArtistAlarm(id);
      } else {
        await releaseArtistAlarm(id);
      }
    } catch (err) {
      console.error('알림 등록/해제 실패', err);
    }
    setPerformanceAlarm(id, next);
  };

  return (
    <S.Button whileTap={{ scale: 0.9, backgroundColor: '#212526' }} onClick={() => handleClick()}>
      {isAlarm ? (
        <AlertFillIcon width={'1rem'} height={'1rem'} />
      ) : (
        <AlertIcon width={'1rem'} height={'1rem'} />
      )}
      <S.Text>알림 {isAlarm ? '해제' : '받기'}</S.Text>
    </S.Button>
  );
}

/**
 * @component PerformanceIconAlert
 * @description 공연 알림 아이콘 버튼
 *
 * @example
 * ```tsx
 * <PerformanceIconAlert id="newJeans" />
 * ```
 * @returns {JSX.Element} 공연 알림 아이콘 버튼
 */
export function PerformanceIconAlert({ id }: { id: string }) {
  const { getPerformanceAlarm, setPerformanceAlarm } = useAlarmStore();
  const isAlarm = getPerformanceAlarm(id);

  return (
    <S.IconButton whileTap={{ scale: 0.9 }} onClick={() => setPerformanceAlarm(id, !isAlarm)}>
      {isAlarm ? (
        <AlertFillIcon width={'1.25rem'} height={'1.25rem'} />
      ) : (
        <AlertIcon width={'1.25rem'} height={'1.25rem'} />
      )}
    </S.IconButton>
  );
}
