// src/pages/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');

  const handleEmailLogin = () => {
    console.log('이메일 로그인 시도:', email);
    // 실제 로그인 로직 추가 예정
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

      <button className="continue-button" onClick={handleEmailLogin}>
        계속
      </button>

      <p className="signup-text">
        또는 <span className="highlight">회원가입</span>
      </p>

      <button className="social-button google">Google로 계속</button>
      <button className="social-button naver">Naver로 계속</button>
      <button className="social-button microsoft">Microsoft로 계속</button>
    </div>
  );
}

export default LoginPage;
