// FETCH API 관리

import { QueryKey, UseMutationOptions, UseQueryOptions, useMutation, useQuery } from '@tanstack/react-query';

export interface RequestProps<REQ = unknown> {
  url: string; // URL Origin 뒷부분
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: REQ;
  options?: RequestInit;
}

// URL Origin
const API_URL = import.meta.env.VITE_API_URL;

const fetcher = async <RES, REQ = unknown>({ url, method, body, options }: RequestProps<REQ>): Promise<RES> => {
  const response = await fetch(`${API_URL}${url}`, {
    ...options,
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    console.log(error);
    throw new Error(error.message || 'RESPONSE FAILED');
  }

  return response.json();
};

// 공통 FETCH API를 활용하는 useQuery
export const useApiQuery = <RES, REQ = unknown, TData = RES>(
  key: string | (string | number)[],
  { url, method, body }: RequestProps<REQ>,
  options?: Omit<UseQueryOptions<RES, Error, TData, QueryKey>, 'queryKey' | 'queryFn'> // 원본 데이터 | 에러 | 최종 데이터 | key
) => {
  return useQuery<RES, Error, TData>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn: () => fetcher<RES, REQ>({ url, method, body }),
    ...options,
  });
};

// 공통 FETCH API를 활용하는 useMutation
export const useApiMutate = <RES, REQ = unknown>(
  { url, method, body }: RequestProps<REQ>,
  options?: Omit<UseMutationOptions<RES, Error, REQ>, 'mutationFn'>
) => {
  return useMutation<RES, Error, REQ>({
    mutationFn: (variables) =>
      fetcher<RES, REQ>({
        url,
        method: method,
        body: variables || body, // mutate(variables)이며, variables가 없다면 body(default)를 포함
      }),
    ...options,
  });
};
