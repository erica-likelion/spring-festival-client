import { useState } from 'react';
import * as S from './OpenAlert.styles';
import AlertIcon from '@/assets/icons/alert.svg?react';
import AlertFillIcon from '@/assets/icons/alert-filled.svg?react';

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

export default function OpenAlert() {
  const [isSubscribe, setIsSubscribe] = useState(false);
  return (
    <S.Button
      whileTap={{ scale: 0.9, backgroundColor: '#212526' }}
      onClick={() => setIsSubscribe(!isSubscribe)}
    >
      {isSubscribe ? <AlertFillIcon /> : <AlertIcon />}
      <S.Text>오픈 알림 {isSubscribe ? '해제' : '받기'}</S.Text>
    </S.Button>
  );
}
