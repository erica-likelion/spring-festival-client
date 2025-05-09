export interface IndicatorProps {
  totalPages: number;
  currentPage: number;
  onClick?: (index: number) => void;
}
