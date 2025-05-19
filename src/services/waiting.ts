import { axiosInstance } from '@/lib';

export const getWaitings = async () => {
  const response = await axiosInstance.get('/api/waitings');
  return response;
};

export const postWaiting = async ({
  visitorCount,
  phoneNumber,
  pubId,
}: {
  visitorCount: number;
  phoneNumber: string;
  pubId: number;
}) => {
  const response = await axiosInstance.post('/api/waitings', { pubId, visitorCount, phoneNumber });
  return response;
};
