import { axiosInstance } from '@/lib';
import { LikeType } from '@/types/like.type';

export const getLikes = async () => {
  const response = await axiosInstance.get('/api/pubs');
  return response;
};

export const postLikes = async (likes: Pick<LikeType, 'id' | 'likeCount'>[]) => {
  const payload = likes.map((like) => ({
    pubId: like.id,
    addCount: like.likeCount,
  }));

  const response = await axiosInstance.post('/api/pubs/like', payload);
  return response;
};
