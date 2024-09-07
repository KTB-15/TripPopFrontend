import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { loginUser, LoginRequest, LoginResponse } from '@/api/auth';
import { useAuthStore } from '@/stores/authStore';

export const useLogin = (): UseMutationResult<LoginResponse, Error, LoginRequest> => {
  const setTokens = useAuthStore((state) => state.setTokens);

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (loginRequest: LoginRequest) => loginUser(loginRequest),
    onError: (error: Error) => {
      console.error('로그인 실패:', error.message);
    },
    onSuccess: (data: LoginResponse) => {
      console.log('로그인 성공:', data);
      setTokens(data.accessToken, data.refreshToken);
    },
  });
};
