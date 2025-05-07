export type LostItem = {
  id: number;
  imageUrl: string;
  name: string;
  location: string;
  isDeliveredToStaff: boolean;
  description: string;
  day: DayType;
  time: string;
};

export type DayType = '1일차' | '2일차' | '3일차';
