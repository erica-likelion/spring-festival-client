import { NoWaiting, WaitingList } from '@/features/waiting';
import * as S from './User.styles';
import { NavBar } from '@/components/nav-bar';
import { Notification } from '@/components/notification';
import { RefreshButton } from '@/components/refresh-button';
import { useWaitingStore } from '@/features/waiting/stores/useWaitingStore';
import { useAuthStore } from '@/stores/useAuthStore';
import { Navigate } from 'react-router-dom';

export default function User() {
  const isLoggined = useAuthStore((state) => state.isLoggedIn);
  const waitings = useWaitingStore((state) => state.waitings);
  const loadWaitings = useWaitingStore((state) => state.loadWaitings);

  if (!isLoggined) return <Navigate to="/login" />;
  if (waitings.length === 0) return <NoWaiting />;
  return (
    <S.Container>
      <NavBar />
      <S.Wrapper>
        <Notification title="잠깐! 노쇼는 안 돼요ㅠ" width="100%" />
        <S.RefreshHeader>
          <RefreshButton
            onClick={() => {
              loadWaitings();
            }}
          />
        </S.RefreshHeader>
        <WaitingList tablingCards={waitings} />
      </S.Wrapper>
    </S.Container>
  );
}
