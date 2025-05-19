import { NoWaiting, WaitingList } from '@/features/waiting';
import * as S from './User.styles';
import { TablingCard } from '@/features/waiting/components/TablingCardList';
import { NavBar } from '@/components/nav-bar';
import { Notification } from '@/components/notification';
import { RefreshButton } from '@/components/refresh-button';
import TEST_IMG from '@/assets/images/notice/notice1-0.webp';
import { useEffect, useState } from 'react';
import { getWaitings } from '@/services/waiting';

const LIST: TablingCard[] = [
  {
    id: 1,
    boothName: '부스 이름',
    boothImage: TEST_IMG,
    order: 1,
    allOrder: 10,
    people: 5,
    waitingNumber: 1,
    watingTime: '10분',
  },
  {
    id: 2,
    boothName: '부스 이름',
    boothImage: TEST_IMG,
    order: 2,
    allOrder: 10,
    people: 5,
    waitingNumber: 2,
    watingTime: '20분',
  },
];

export default function User() {
  const [list, setList] = useState<TablingCard[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWaitings();
        if (response.status === 200) setList(response.data);
      } catch (error) {
        console.error('Error fetching waiting data:', error);
      }
    };

    fetchData();
  }, []);
  if (list.length === 0) return <NoWaiting />;
  return (
    <S.Container>
      <NavBar />
      <S.Wrapper>
        <Notification title="잠깐! 노쇼는 안 돼요ㅠ" width="100%" />
        <S.RefreshHeader>
          <RefreshButton onClick={() => {}} />
        </S.RefreshHeader>
        <WaitingList tablingCards={LIST} />
      </S.Wrapper>
    </S.Container>
  );
}
