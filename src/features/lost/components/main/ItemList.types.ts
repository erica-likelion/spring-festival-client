export type LostItem = {
  id: number;
  imageUrl: string;
  name: string;
  location: string;
  isDeliveredToStaff: boolean;
};

export type DayType = '1일차' | '2일차' | '3일차';
