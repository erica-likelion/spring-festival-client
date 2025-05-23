import React, { useEffect, useState } from 'react';
import * as S from './TablingCardList.styles';
import { Reorder } from 'framer-motion';
import RightIcon from '@/assets/icons/right-arrow.svg?react';
import { BlueButton } from '@/components/bluebuttons';
import { useNavigate } from 'react-router-dom';
import useModal from '@/hooks/useModal';
import WaitingCancelModal from '@/features/waiting/components/WaitingCancelModal';
import { UserWaitingType } from '@/types/waiting.type';
import { BOOTH_LIST } from '@/constants/booth/booth';

interface TablingCardListProps {
  tablingCards: UserWaitingType[];
}

export default function TablingCardList({ tablingCards }: TablingCardListProps) {
  const [items, setItems] = useState<UserWaitingType[]>(tablingCards);
  const [openId, setOpenId] = useState<number | null>(null);
  const navigate = useNavigate();
  const Modal = WaitingCancelModal as React.ComponentType<{
    id: number;
    title: string;
    pubId: number;
  }>;
  const { open } = useModal(Modal);

  useEffect(() => {
    setItems(tablingCards);
  }, [tablingCards]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    e.stopPropagation();
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>, id: number, pubId: number) => {
    e.stopPropagation();
    open({
      title: '웨이팅 취소',
      id: id,
      pubId,
    });
  };

  return (
    <Reorder.Group values={items} onReorder={setItems} axis="y">
      {items.map((item) => {
        const booth = BOOTH_LIST.find((booth) => booth.id === item.pubId);
        if (!booth) return null;
        return (
          <S.Card key={item.pubId} value={item}>
            <S.CardWrapper layout onClick={(e) => handleClick(e, item.pubId)}>
              <S.Header style={openId === item.pubId ? { height: '8.75rem' } : {}}>
                {openId === item.pubId && (
                  <S.CardImage
                    key={`image-${item.pubId}`}
                    image={booth?.posterImage}
                    layoutId={`image-${item.pubId}`}
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
                <S.HeaderFrame
                  key={`fade-${item.pubId}-${openId === item.pubId ? 'open' : 'close'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4, ease: 'easeInOut' }}
                >
                  <S.HeaderText>{booth.pubName}</S.HeaderText>
                  <RightIcon
                    width={'1.5rem'}
                    height={'1.5rem'}
                    fill="#FAFAFA"
                    style={{ zIndex: 1 }}
                    onClick={() => navigate(`/booth/${item.pubId}`)}
                  />
                </S.HeaderFrame>
              </S.Header>
              <S.HorizontalLine />
              <S.TextSection>
                <S.TextFrame>
                  <S.Title>내 순서</S.Title>
                  <S.VerticalLine />
                  <S.NumTextFrame>
                    <S.BigNumTextFrame>
                      <p>{item.numsTeamsAhead}</p>
                      <p>번째</p>
                    </S.BigNumTextFrame>
                    <S.NumTextFrame>
                      <p>/</p>
                      <S.Strong>{item.wholeWaitingNum}</S.Strong>
                      <p>팀</p>
                    </S.NumTextFrame>
                  </S.NumTextFrame>
                </S.TextFrame>
                <S.TextFrame>
                  <S.Title>방문 인원</S.Title>
                  <S.VerticalLine />
                  <S.NumTextFrame>
                    <S.Strong>{item.visitorCount}</S.Strong>
                    <p>명</p>
                  </S.NumTextFrame>
                </S.TextFrame>
              </S.TextSection>
              {openId === item.pubId && (
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
                      <S.Strong>{item.waitingId}</S.Strong>
                      <p>번</p>
                    </S.NumTextFrame>
                  </S.TextFrame>
                  <S.HorizontalLine />
                  <S.SelectedFrame>
                    <S.TextFrame>
                      <S.Small>등록</S.Small>
                    </S.TextFrame>
                    <BlueButton
                      label="웨이팅 취소"
                      size="small"
                      onClick={(e) => handleCancelClick(e, item.waitingId, item.pubId)}
                    />
                  </S.SelectedFrame>
                </S.Expendable>
              )}
            </S.CardWrapper>
          </S.Card>
        );
      })}
    </Reorder.Group>
  );
}
