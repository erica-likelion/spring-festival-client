import { CATEGORIES } from '@/constants/map/Categories';
import { DAYS } from '@/constants/map';
import { ReactNode } from 'react';

export interface BottomSheetProps {
  selectedCategory: CATEGORIES | null;
  selectedDay?: DAYS;
  children?: ReactNode;
}
