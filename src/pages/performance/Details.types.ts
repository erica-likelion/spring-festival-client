export type PerformanceDetailsProps = {
  backgroundUrl: string; // 배경 이미지 URL
  singer: string; // 가수 이름
  time: string; // 공연 시간 (ex: "21:00~22:00")
  description: string; // 가수 설명
  songList: Song[]; // 대표곡 리스트
};

export type Song = {
  image: string; // 노래 썸네일 이미지 URL
  name: string; // 노래 제목
  url: string; // 노래 링크 (유튜브 링크)
};
