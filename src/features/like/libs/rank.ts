import { LikeType } from '@/types/like.type';

export const getRankDiff = (like: LikeType) => {
  if (like.prevRank === undefined || like.currentRank === undefined) return 0;
  return like.prevRank - like.currentRank;
};

export const getRankDiffText = (like: LikeType) => {
  const diff = getRankDiff(like);
  return diff;
};
