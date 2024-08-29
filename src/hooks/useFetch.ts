// FETCH API 관리

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export interface RequestProps<REQ = unknown> {
  url: string;
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: REQ;
  options?: RequestInit;
}

const API_URL = import.meta.env.VITE_API_URL;

const fetcher = async <RES, REQ = unknown>({ url, method, body, options }: RequestProps<REQ>): Promise<RES> => {
  const response = await fetch(API_URL + url, {
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
    throw new Error(error.message || 'RESPONSE FAILED');
  }

  return response.json();
};

export const useFetch = <RES, REQ = unknown>(
  key: string | (string | number)[],
  { url, method, body }: RequestProps<REQ>,
  options?: UseQueryOptions<RES, Error>
) => {
  return useQuery<RES, Error>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn: () => fetcher<RES>({ url, method, body }),
    ...options,
  });
};
