// src/pages/FavoritePage.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import './FavoritePage.css';

const favoriteItems = [
  { type: 'document', name: '재건축_보고서.pdf' },
  { type: 'image', name: '현장사진.jpg', src: '/images/sample.jpg' },
  { type: 'link', name: '정부 발표 자료', url: 'https://gov.example.com/report' },
  { type: 'document', name: '사업계획서.hwp' },
];

function FavoritePage() {
  const userName = '홍길동';
  const groupName = '재건축';

  return (
    <div className="favorite-container">
      <Sidebar />

      <div className="favorite-content">
        <h2>"{userName}"님의 ({groupName}) 즐겨찾기</h2>

        <div className="favorite-grid">
          {favoriteItems.map((item, idx) => (
            <div className="favorite-box" key={idx}>
              {item.type === 'document' && (
                <div className="doc-item">
                  📄 {item.name}
                </div>
              )}
              {item.type === 'image' && (
                <div className="img-item">
                  <img src={item.src} alt={item.name} />
                  <div className="label">{item.name}</div>
                </div>
              )}
              {item.type === 'link' && (
                <div className="link-item">
                  🔗 <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavoritePage;
