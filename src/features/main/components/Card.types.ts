export interface CardProps {
  isSun: boolean;
  startTime?: string;
  endTime?: string;
  tags?: { color: string; text: string }[];
  title: string;
}

export interface ProgressProps {
  startTime?: string;
  endTime?: string;
}
