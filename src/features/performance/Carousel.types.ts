export type PerformanceItem = {
  backgroundUrl: string;
  singer: string;
  time: string;
  description: string;
  songList: { image: string; name: string }[];
};

export interface CarouselProps {
  data: PerformanceItem[];
}
