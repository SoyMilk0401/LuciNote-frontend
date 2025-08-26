import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';

function Sidebar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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
        {token ? (
          <button onClick={handleLogout} className="logout-button">🔐 로그아웃</button>
        ) : (
          <Link to="/login">🔐 로그인</Link>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
