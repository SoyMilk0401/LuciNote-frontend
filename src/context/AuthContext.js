import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('accessToken'));

  const login = async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      if (response.data.access_token) {
        const newToken = response.data.access_token;
        setToken(newToken);
        localStorage.setItem('accessToken', newToken);
        return { success: true };
      }
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, message: error.response?.data?.message || '로그인에 실패했습니다.' };
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout');
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setToken(null);
      localStorage.removeItem('accessToken');
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
