import { axiosInstance } from '@/lib';

export const sendToken = async (token: string) => {
  const response = await axiosInstance.post('/fcm/token', {
    token: token,
  });
  return response.data;
};
