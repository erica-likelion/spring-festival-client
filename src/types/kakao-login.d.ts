interface KakaoAuthResponse {
  access_token: string;
  token_type?: string;
  refresh_token?: string;
  expires_in?: number;
  scope?: string;
}

interface KakaoError {
  error: string;
  error_description?: string;
}

interface KakaoAuth {
  login: (options: {
    success: (authObj: KakaoAuthResponse) => void;
    fail: (err: KakaoError) => void;
  }) => void;
  authorize: (options: { redirectUri: string }) => void;
}

interface KakaoAPIResponse {
  [key: string]: unknown;
}

interface KakaoAPI {
  request: (options: {
    url: string;
    success: (res: KakaoAPIResponse) => void;
    fail: (err: KakaoError) => void;
  }) => void;
}

interface Kakao {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Auth: KakaoAuth;
  API: KakaoAPI;
}

interface Window {
  Kakao: Kakao;
}
