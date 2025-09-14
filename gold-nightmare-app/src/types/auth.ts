export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  name: string;
  email: string;
  points: number;
  licenseType: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user?: User;
}
