import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://211.188.62.189:8080',
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // access token 만료 시도 감지
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshResponse = await axiosInstance.post('/auth/refresh');
        const newAccessToken = refreshResponse.headers['authorization']?.replace('Bearer ', '');

        if (newAccessToken) {
          localStorage.setItem('access_token', newAccessToken);
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        console.error('토큰 갱신 실패', refreshError);
        localStorage.removeItem('access_token');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
