import { LoginCredentials, LoginResponse } from '@/types/auth';

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const data: LoginResponse = await response.json();

  if (!response.ok) {
    // The API returns a message in the JSON body even for errors
    throw new Error(data.message || 'An unknown error occurred during login.');
  }

  return data;
};
