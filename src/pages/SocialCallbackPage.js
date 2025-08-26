import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function SocialCallbackPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const error = params.get('error');

    if (error) {
      alert(`로그인 중 오류가 발생했습니다: ${error}`);
      navigate('/login');
      return;
    }

    if (token) {
      // AuthContext를 통해 토큰을 설정하고 저장
      login(token); 
      navigate('/main');
    } else {
      // 토큰이 없는 경우
      alert('로그인 정보를 받아오지 못했습니다.');
      navigate('/login');
    }
  }, [location, navigate, login]);

  return (
    <div>
      <p>로그인 처리 중입니다...</p>
    </div>
  );
}

export default SocialCallbackPage;
