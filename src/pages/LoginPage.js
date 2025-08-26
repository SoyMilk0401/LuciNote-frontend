import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { token, login } = useAuth();

  useEffect(() => {
    if (token) {
      navigate('/main');
    }
  }, [token, navigate]);

  const handleEmailLogin = async () => {
    if (!email || !password) {
      alert('이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }
    const result = await login(email, password);
    if (result && result.success) {
      navigate('/main');
    } else if (result) {
      alert(result.message);
    }
  };
  
  const handleSocialLogin = (provider) => {
    window.location.href = `http://127.0.0.1:5000/api/auth/login/${provider}`;
  };

  return (
    <div className="login-page">
      <h2>로그인 해주세요.</h2>
      <input
        type="email"
        placeholder="이메일 주소 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input"
      />
      <input
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="email-input"
      />
      <button className="continue-button" onClick={handleEmailLogin}>
        계속
      </button>
      <p className="signup-text">
        또는 <Link to="/register" className="highlight">회원가입</Link>
      </p>
      <button className="social-button google" onClick={() => handleSocialLogin('google')}>Google로 계속</button>
      <button className="social-button naver" onClick={() => handleSocialLogin('naver')}>Naver로 계속</button>
    </div>
  );
}

export default LoginPage;
