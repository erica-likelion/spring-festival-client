import { useRefreshStore } from '@/stores/useRefreshStore';
import * as S from './RefreshButton.styles';
import RefreshIcon from '@/assets/icons/refresh.svg?react';

/**
 * 새로고침 버튼 컴포넌트 - 전역 상태 공유
 *
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {() => void} [props.onClick] - 버튼 클릭 시 실행할 콜백 함수
 * @returns {JSX.Element} 새로고침 버튼 컴포넌트
 *
 * @example
 * ```tsx
 * <RefreshButton onClick={() => console.log('새로고침')} />
 * ```
 */
export default function RefreshButton({ onClick = () => {} }: { onClick: () => void }) {
  const { disabled, count, startCountdown } = useRefreshStore();
  const handleClick = () => {
    if (disabled) return;
    startCountdown(30);
    onClick();
  };
  return (
    <S.Button
      whileTap={{ scale: 0.9, backgroundColor: '#212526' }}
      onClick={handleClick}
      disabled={disabled}
    >
      <RefreshIcon fill={disabled ? '#A6A9AA' : '#fafafa'} width={'1rem'} height={'1rem'} />
      <S.Text>새로고침</S.Text>
      {count > 0 && <S.Text>{count < 10 ? `0${count}` : count}s</S.Text>}
    </S.Button>
  );
}
