import { ColorKey } from '@/components/colorbuttons/ColorButton.types';

export interface CardProps {
  isSun: boolean;
  startTime?: string;
  endTime?: string;
  tags?: { color: string | ColorKey; text: string }[];
  title: string;
  location: string;
  onClick?: () => void;
}

export interface ProgressProps {
  startTime?: string;
  endTime?: string;
}
