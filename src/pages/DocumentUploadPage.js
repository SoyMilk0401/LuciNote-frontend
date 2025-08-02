// src/pages/DocumentUploadPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './LibraryPage.css';
import './DeepResearch.css';

// 예시 문서 목록 (mock 데이터)
const mockDocuments = [
  '업로드_예시문서1.pdf',
  '업로드_예시문서2.docx',
  '업로드_예시문서3.pptx',
];

function DocumentUploadPage({ onUploadComplete = () => {} }) {
  const [documents, setDocuments] = useState(mockDocuments); // mockDocuments로 초기화
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setDocuments((prev) => [...prev, ...files.map((f) => f.name)]);
    onUploadComplete(files);

    // 파일 업로드 후 첫 번째 파일 이름을 쿼리로 전달하며 이동
    if (files.length > 0) {
      navigate(`/document-detail?fileName=${encodeURIComponent(files[0].name)}`);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setDocuments((prev) => [...prev, ...files.map((f) => f.name)]);
    onUploadComplete(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="library-container">
      <Sidebar />
      <div className="library-content">
        {/* 상단 업로드 구역 */}
        <div
          style={{
            height: '33vh',
            border: '2px dashed #ccc',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
            cursor: 'pointer',
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <label
            htmlFor="file-upload"
            style={{
              padding: '12px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            파일 업로드+
          </label>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <small style={{ marginTop: '10px', color: '#888' }}>
            드래그 앤 드롭 / 업로드
          </small>
        </div>

        {/* 하단 문서 목록 */}
        <div className="document-list">
          {documents.length === 0 ? (
            <p>아직 업로드된 문서가 없습니다.</p>
          ) : (
            documents.map((doc, idx) => (
              <div key={idx} className="document-box">
                {doc}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default DocumentUploadPage;
