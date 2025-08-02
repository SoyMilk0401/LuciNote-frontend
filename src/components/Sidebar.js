// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // 선택적으로 스타일 분리

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/main">🏠 메인</Link></li>
          <li><Link to="/upload">📁 문서 등록</Link></li>
          <li><Link to="/library">📚 라이브러리</Link></li>
          <li><Link to="/deep-research">🧠 딥 리서치</Link></li>
          <li><Link to="/favorites">⭐ 즐겨찾기</Link></li>
        </ul>
      </nav>
      <div className="bottom-icon">
        <Link to="/login">🔐 로그인</Link>
      </div>
    </div>
  );
}

export default Sidebar;
