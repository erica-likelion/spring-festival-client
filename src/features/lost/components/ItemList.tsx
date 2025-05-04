import { Tabs } from '@/components/tabs';
import * as S from './ItemList.styles';
import { useState } from 'react';
import HelpIcon from '@/assets/icons/help_gy600.svg?react';
import { lostItemsByDay } from '@/constants/lost/LostItems';
import { DayType } from '@/features/lost/components/ItemList.types';
import { ItemCard, ModalNotification } from '@/features/lost';
import useModal from '@/hooks/useModal';

export default function ItemList() {
  const [selectedDay, setSelectedDay] = useState<DayType>('1일차');
  const { open } = useModal(ModalNotification);

  const handleHelpClick = () => {
    open(
      {
        title: '분실물 전달 상태',
      },
      {
        isHelpIcon: true,
      },
    );
  };
  return (
    <S.Container>
      <S.TitleWrap>
        <S.Title>분실물 목록</S.Title>
        <S.Description>축제에서 발생한 분실물들을 모아서 볼 수 있습니다.</S.Description>
      </S.TitleWrap>
      <S.ItemWrap>
        <S.TabIconBox>
          <Tabs
            tabs={['1일차', '2일차', '3일차']}
            activeTab={selectedDay}
            onTabClick={(tab) => setSelectedDay(tab as DayType)}
          />
          <HelpIcon width={'1.125rem'} height={'1.125rem'} onClick={() => handleHelpClick()} />
        </S.TabIconBox>
        <S.Grid>
          {lostItemsByDay[selectedDay].map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </S.Grid>
      </S.ItemWrap>
    </S.Container>
  );
}
