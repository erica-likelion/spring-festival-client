import { Tabs } from '@/components/tabs';
import * as S from './ItemList.styles';
import { useEffect, useState } from 'react';
import HelpIcon from '@/assets/icons/nrk_help.svg?react';
import { DayType, LostItem } from '@/features/lost/components/main/ItemList.types';
import { ItemCard, ModalNotification } from '@/features/lost';
import useModal from '@/hooks/useModal';
import { theme } from '@/styles/theme';
import axios from 'axios';

/**
 * 분실물 목록 컴포넌트
 * @returns {JSX.Element}
 */

export default function ItemList() {
  const [selectedDay, setSelectedDay] = useState<DayType>('1일차');
  const [opacity, setOpacity] = useState(1);
  const [lostItems, setLostItems] = useState<LostItem[]>([]);
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

  useEffect(() => {
    const fetchLostItems = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/lost-items`);
        setLostItems(res.data);
      } catch (error) {
        console.error('분실물 데이터를 불러오는 데 실패했습니다:', error);
      }
    };

    fetchLostItems();
  }, []);

  const filteredItems = lostItems.filter((item) => item.foundDate === selectedDay);

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
            fill={theme.colors.grayScale.gy600}
          />
        </S.TabIconBox>
        <S.Grid style={{ opacity }}>
          {filteredItems.reverse().map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </S.Grid>
      </S.ItemWrap>
    </S.Container>
  );
}
