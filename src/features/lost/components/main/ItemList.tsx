import { Tabs } from '@/components/tabs';
import * as S from './ItemList.styles';
import { useState } from 'react';
import HelpIcon from '@/assets/icons/help_gy600.svg?react';
import { lostItemsByDay } from '@/constants/lost/LostItems';
import { DayType } from '@/features/lost/components/main/ItemList.types';
import { ItemCard, ModalNotification } from '@/features/lost';
import useModal from '@/hooks/useModal';

/**
 * 분실물 목록 컴포넌트
 * @returns {JSX.Element}
 */

export default function ItemList() {
  const [selectedDay, setSelectedDay] = useState<DayType>('1일차');
  const [opacity, setOpacity] = useState(1);
  const { open } = useModal(ModalNotification);

  const handleTabChange = (tab: string) => {
    setOpacity(0.4);
    setTimeout(() => {
      setSelectedDay(tab as DayType);
      setOpacity(1);
    }, 150);
  };

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
            onTabClick={handleTabChange}
          />
          <HelpIcon
            width={'1.125rem'}
            height={'1.125rem'}
            onClick={() => handleHelpClick()}
            style={{ cursor: 'pointer' }}
          />
        </S.TabIconBox>
        <S.Grid style={{ opacity }}>
          {lostItemsByDay[selectedDay].map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </S.Grid>
      </S.ItemWrap>
    </S.Container>
  );
}
