export interface LoginRequest {
  memberId: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const loginUser = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginRequest),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};
