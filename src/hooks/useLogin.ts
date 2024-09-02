import { useMutation } from 'react-query';
import { loginUser, LoginRequest, LoginResponse } from '@/api/auth';
import { useAuthStore } from '@/stores/authStore';

export const useLogin = () => {
  const setTokens = useAuthStore((state) => state.setTokens);

  return useMutation<LoginResponse, Error, LoginRequest>(
    async (loginRequest: LoginRequest) => {
      const data = await loginUser(loginRequest);
      return data;
    },
    {
      onError: (error: Error) => {
        console.error('로그인 실패:', error.message);
        alert('아이디, 비밀번호를 확인해주세요.');
      },
      onSuccess: (data: LoginResponse) => {
        console.log('로그인 성공:', data);
        setTokens(data.accessToken, data.refreshToken);
      },
    }
  );
};
