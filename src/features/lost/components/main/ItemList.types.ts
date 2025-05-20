export type LostItem = {
  id: number;
  image: string;
  name: string;
  description: string;
  staffNotified: boolean;
  foundLocation: string;
  foundDate: DayType;
  foundTime: string;
};

export type DayType = '1일차' | '2일차' | '3일차';
