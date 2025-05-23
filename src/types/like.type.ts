export interface LikeType {
  id: number;
  likeCount: number;
  name?: string;
  prevRank?: number;
  currentRank?: number;
  updateCount: number;
  waitingCount?: number;
}
