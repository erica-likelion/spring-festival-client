import { ColorKey } from '@/components/colorbuttons/ColorButton.types';

export interface CardProps {
  isSun: boolean;
  startTime?: string;
  endTime?: string;
  tags?: { color: string | ColorKey; text: string }[];
  title: string;
  location: string;
}

export interface ProgressProps {
  startTime?: string;
  endTime?: string;
}
