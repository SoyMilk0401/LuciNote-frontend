// src/pages/DeepResearchInputPage.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import './DeepResearch.css';

function DeepResearchInputPage() {
  const navigate = useNavigate();

  const [selectedDoc, setSelectedDoc] = useState('');
  const [summaryType, setSummaryType] = useState('');
  const [tone, setTone] = useState('');
  const [referenceScope, setReferenceScope] = useState('');

  const documentList = ['재건축_보고서.pdf', '사업계획서.hwp'];

  const handleExecute = () => {
    // 실제 요약 처리 로직 필요
    navigate('/deep-research/result');
  };

  return (
    <div className="deep-container">
      <Sidebar />
      <div className="deep-content">
        <h2>딥 리서치 - 사용자 맞춤 문서 요약 및 분석</h2>

        <div className="input-section">
          <label>주제</label>
          <select value={selectedDoc} onChange={(e) => setSelectedDoc(e.target.value)}>
            <option value="">문서를 선택하세요</option>
            {documentList.map((doc, idx) => (
              <option key={idx} value={doc}>{doc}</option>
            ))}
          </select>

          <label>작성 형식</label>
          <select value={summaryType} onChange={(e) => setSummaryType(e.target.value)}>
            <option value="">선택</option>
            <option value="간단 요약">간단 요약</option>
            <option value="상세 요약">상세 요약</option>
          </select>

          <label>서술 형식</label>
          <select value={tone} onChange={(e) => setTone(e.target.value)}>
            <option value="">선택</option>
            <option value="설명하듯이">설명하듯이</option>
            <option value="간략하게">간략하게</option>
          </select>

          <label>참고 범위</label>
          <select value={referenceScope} onChange={(e) => setReferenceScope(e.target.value)}>
            <option value="">선택</option>
            <option value="대상 문서">대상 문서</option>
            <option value="대상 문서 & 웹 검색">대상 문서 & 웹 검색</option>
          </select>

          <button className="execute-button" onClick={handleExecute}>리서치 실행</button>
        </div>
      </div>
    </div>
  );
}

export default DeepResearchInputPage;
