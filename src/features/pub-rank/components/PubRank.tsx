import * as S from './PubRank.styles';
import { RefreshButton } from '@/components/refresh-button';
import RankImageTextFrame from '@/features/pub-rank/components/RankImageTextFrame';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const MOCK_RANK_LIST = [
  {
    rank: 1,
    title: '퍼블리시 랭킹2',
    organization: '퍼블리시',
    likeCount: 0,
  },
  {
    rank: 2,
    title: '퍼블리시 랭킹1',
    organization: '퍼블리시',
    likeCount: 0,
  },
  {
    rank: 3,
    title: '퍼블리시 랭킹3',
    organization: '퍼블리시',
    likeCount: 0,
  },
  {
    rank: 4,
    title: '퍼블리시 랭킹4',
    organization: '퍼블리시',
    likeCount: 0,
  },
  {
    rank: 5,
    title: '퍼블리시 랭킹5',
    organization: '퍼블리시',
    likeCount: 0,
  },
];

export default function PubRank() {
  const [rankList, setRankList] = useState(MOCK_RANK_LIST);
  const shuffleRankList = () => {
    const shuffled = [...rankList].sort(() => Math.random() - 0.5);
    const reranked = shuffled.map((item, index) => ({
      ...item,
      rank: index + 1,
    }));
    setRankList(reranked);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Count>
          전체 {rankList.length < 10 ? '0' : ''}
          {rankList.length}개
        </S.Count>
        <RefreshButton
          onClick={() => {
            shuffleRankList();
          }}
        />
      </S.Header>
      <S.RankList>
        <AnimatePresence>
          {rankList.map((item) => {
            return (
              <S.RankItem key={item.title} layout>
                <RankImageTextFrame
                  rank={item.rank}
                  title={item.title}
                  organization={item.organization}
                  likeCount={item.likeCount}
                />
                <S.HorizontalLine />
              </S.RankItem>
            );
          })}
        </AnimatePresence>
      </S.RankList>
    </S.Container>
  );
}
