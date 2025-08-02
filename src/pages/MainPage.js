// src/pages/MainPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './MainPage.css';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <Sidebar />
      <div className="main-content">
        <h1>무엇을 하시겠습니까?</h1>
        <div className="button-grid">
          <button onClick={() => navigate('/upload')}>📁 문서 등록/관리</button>
          <button onClick={() => navigate('/library')}>📚 라이브러리</button>
          <button onClick={() => navigate('/deep-research')}>🧠 딥 리서치</button>
          <button onClick={() => navigate('/favorites')}>⭐ 즐겨찾기</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
