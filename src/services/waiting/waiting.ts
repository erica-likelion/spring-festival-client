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

export const deleteWaitings = async (id: number) => {
  const response = await axiosInstance.delete(`/api/waitings?id=${id}`);
  return response;
};

export const getWaitingCount = async () => {
  const response = await axiosInstance.get('/api/pubs/waiting-count');
  return response;
};
