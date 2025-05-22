import { axiosInstance } from '@/lib';

export const sendToken = async (token: string) => {
  const response = await axiosInstance.post('/fcm/token', {
    token: token,
  });
  return response;
};

/**
 * 아티스트 공연 시작 전 알림 신청
 * @params {string} artistName - 아티스트 이름
 */
export const registerArtistAlarm = async (artistName: string) => {
  return await axiosInstance.post(`/concert/${encodeURIComponent(artistName)}/alarm`);
};

/**
 * 아티스트 공연 시작 전 알림 해제
 * @params {string} artistName - 아티스트 이름
 */
export const releaseArtistAlarm = async (artistName: string) => {
  return await axiosInstance.delete(`/concert/${encodeURIComponent(artistName)}/alarm`);
};
