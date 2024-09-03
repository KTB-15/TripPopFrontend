// FETCH API 관리

import { QueryKey, UseMutationOptions, UseQueryOptions, useMutation, useQuery } from '@tanstack/react-query';
import { useAuthStore } from '@/stores/authStore';

export interface RequestProps<REQ = unknown> {
  url: string; // URL Origin 뒷부분
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: REQ;
  options?: RequestInit;
}

// URL Origin
const API_URL = import.meta.env.VITE_API_URL;

// Fetcher 함수
const fetcher = async <RES, REQ = unknown>({
  url,
  method,
  body,
  options,
  accessToken,
  refreshToken,
}: RequestProps<REQ> & { accessToken: string | null; refreshToken: string | null }): Promise<RES> => {
  if (accessToken == null && refreshToken == null) {
    window.location.href = '/login';
    throw new Error('Session expired. Please log in again.');
  }

  const response = await fetch(`${API_URL}${url}`, {
    ...options,
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      ...options?.headers,
    },
  });

  if (response.status === 401 && refreshToken) {
    const tokenResponse = await fetch(`${API_URL}/auth/refresh-token`, {
      method: 'POST',
      body: refreshToken,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (tokenResponse.status === 401) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      window.location.href = '/login';
      throw new Error('Session expired. Please log in again.');
    }

    const tokenData = await tokenResponse.json();
    localStorage.setItem('accessToken', tokenData.accessToken);
    const setTokens = useAuthStore.getState().setTokens; // 훅 대신 직접 접근하여 상태 업데이트
    setTokens(tokenData.accessToken, refreshToken);

    const retryResponse = await fetch(`${API_URL}${url}`, {
      ...options,
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenData.accessToken}`,
        ...options?.headers,
      },
    });

    if (!retryResponse.ok) {
      const retryError = await retryResponse.json();
      console.log(retryError);
      throw new Error(retryError.message || 'RESPONSE FAILED');
    }

    return retryResponse.json();
  } else if (!response.ok) {
    const error = await response.json();
    console.log(error);
    throw new Error(error.message || 'RESPONSE FAILED');
  }

  return response.json();
};

// useApiQuery
export const useApiQuery = <RES, REQ = unknown, TData = RES>(
  key: string | (string | number)[],
  { url, method, body }: RequestProps<REQ>,
  options?: Omit<UseQueryOptions<RES, Error, TData, QueryKey>, 'queryKey' | 'queryFn'>
) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const refreshToken = useAuthStore((state) => state.refreshToken);

  return useQuery<RES, Error, TData>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn: () => fetcher<RES, REQ>({ url, method, body, accessToken, refreshToken }),
    ...options,
  });
};

// useApiMutate
export const useApiMutate = <RES, REQ = unknown>(
  { url, method, body }: RequestProps<REQ>,
  options?: Omit<UseMutationOptions<RES, Error, REQ>, 'mutationFn'>
) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const refreshToken = useAuthStore((state) => state.refreshToken);

  return useMutation<RES, Error, REQ>({
    mutationFn: (variables) =>
      fetcher<RES, REQ>({
        url,
        method: method,
        body: variables || body,
        accessToken,
        refreshToken,
      }),
    ...options,
  });
};
