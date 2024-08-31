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
        // 여기에서 에러를 UI로 전달할 수 있습니다.
        // 예: toast나 modal을 통해 사용자에게 에러 메시지 표시
      },
      onSuccess: (data: LoginResponse) => {
        console.log('로그인 성공:', data);
        setTokens(data.accessToken, data.refreshToken);
      },
    }
  );
};
