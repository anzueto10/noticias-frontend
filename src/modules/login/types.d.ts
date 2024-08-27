export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginResponse {
  token: string;
}
