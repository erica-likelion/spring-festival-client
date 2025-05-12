import React, { useState } from 'react';
import * as S from './TablingCardList.styles';
import { Reorder } from 'framer-motion';
import RightIcon from '@/assets/icons/right-arrow.svg?react';
import { BlueButton } from '@/components/bluebuttons';
import useModal from '@/hooks/useModal';
import WaitingCancelModal from '@/features/waiting/components/WaitingCancelModal';

export type TablingCard = {
  id: number;
  boothName: string;
  boothImage: string;
  order: number;
  allOrder: number;
  people: number;
  waitingNumber: number;
  watingTime: string;
};

interface TablingCardListProps {
  tablingCards: TablingCard[];
}

export default function TablingCardList({ tablingCards }: TablingCardListProps) {
  const [items, setItems] = useState<TablingCard[]>(tablingCards);
  const [openId, setOpenId] = useState<number | null>(null);
  const { open } = useModal(WaitingCancelModal);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    e.stopPropagation();
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    open({
      title: '웨이팅 취소',
    });
  };

  return (
    <Reorder.Group values={items} onReorder={setItems} axis="y">
      {items.map((item) => (
        <S.Card key={item.id} value={item}>
          <S.CardWrapper layout onClick={(e) => handleClick(e, item.id)}>
            <S.Header style={openId === item.id ? { height: '8.75rem' } : {}}>
              {openId === item.id && (
                <S.CardImage
                  key={`image-${item.id}`}
                  image={item.boothImage}
                  layoutId={`image-${item.id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 20,
                  }}
                />
              )}
              <S.HeaderText>{item.boothName}</S.HeaderText>
              <RightIcon width={'1.5rem'} height={'1.5rem'} fill="#FAFAFA" style={{ zIndex: 1 }} />
            </S.Header>
            <S.HorizontalLine />
            <S.TextSection>
              <S.TextFrame>
                <S.Title>내 순서</S.Title>
                <S.VerticalLine />
                <S.NumTextFrame>
                  <S.BigNumTextFrame>
                    <p>{item.order}</p>
                    <p>번째</p>
                  </S.BigNumTextFrame>
                  <S.NumTextFrame>
                    <p>/</p>
                    <S.Strong>{item.allOrder}</S.Strong>
                    <p>팀</p>
                  </S.NumTextFrame>
                </S.NumTextFrame>
              </S.TextFrame>
              <S.TextFrame>
                <S.Title>방문 인원</S.Title>
                <S.VerticalLine />
                <S.NumTextFrame>
                  <S.Strong>{item.people}</S.Strong>
                  <p>명</p>
                </S.NumTextFrame>
              </S.TextFrame>
            </S.TextSection>
            {openId === item.id && (
              <S.Expendable
                key="expand"
                initial={{ opacity: 0, maxHeight: 0 }}
                animate={{ opacity: 1, maxHeight: 500 }}
                exit={{ opacity: 0, maxHeight: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 20,
                }}
              >
                <S.TextFrame>
                  <S.Title>웨이팅 번호</S.Title>
                  <S.VerticalLine />
                  <S.NumTextFrame>
                    <S.Strong>{item.people}</S.Strong>
                    <p>명</p>
                  </S.NumTextFrame>
                </S.TextFrame>
                <S.HorizontalLine />
                <S.SelectedFrame>
                  <S.TextFrame>
                    <S.Small>{item.watingTime}</S.Small>
                    <S.Small>등록</S.Small>
                  </S.TextFrame>
                  <BlueButton label="웨이팅 취소" size="small" onClick={handleCancelClick} />
                </S.SelectedFrame>
              </S.Expendable>
            )}
          </S.CardWrapper>
        </S.Card>
      ))}
    </Reorder.Group>
  );
}
