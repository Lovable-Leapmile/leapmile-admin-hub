// Authentication utilities for persistent state management

export interface UserData {
  token: string;
  userName: string;
  userPhone: string;
}

export const getStoredUserData = (): UserData | null => {
  try {
    const token = localStorage.getItem('userToken');
    const userName = localStorage.getItem('userName');
    const userPhone = localStorage.getItem('userPhone');

    if (token && userName && userPhone) {
      return { token, userName, userPhone };
    }
    return null;
  } catch {
    return null;
  }
};

export const getStoredToken = (): string | null => {
  try {
    return localStorage.getItem('userToken');
  } catch {
    return null;
  }
};

export const getStoredBaseUrl = (): string => {
  try {
    return localStorage.getItem('baseUrl') || '';
  } catch {
    return '';
  }
};

export const clearStoredUserData = (): void => {
  try {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userPhone');
  } catch {
    // Silently fail
  }
};

export const makeAuthenticatedRequest = async (endpoint: string, options: RequestInit = {}) => {
  const token = getStoredToken();
  const baseUrl = getStoredBaseUrl();

  if (!token) {
    throw new Error('No authentication token found');
  }

  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  const url = endpoint.startsWith('http') ? endpoint : `${baseUrl}${endpoint}`;
  return fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });
};
