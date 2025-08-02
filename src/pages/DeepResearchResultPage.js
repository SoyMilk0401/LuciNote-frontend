// src/pages/DeepResearchResultPage.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import './DeepResearch.css';

function DeepResearchResultPage() {
  return (
    <div className="deep-container">
      <Sidebar />
      <div className="deep-content">
        <h2>딥 리서치 - 사용자 맞춤 문서 요약 및 분석</h2>

        <div className="result-section">
          <label>Topic</label>
          <div className="result-box">재건축 일정 단계</div>

          <label>Answer</label>
          <div className="result-box">
            재건축은 사업 추진 일정에 따라 정비계획 수립, 조합 설립, 시공사 선정, 이주/철거, 착공 등으로 단계가 나뉩니다.
          </div>

          <label>Reference</label>
          <div className="result-box">
            PDF 페이지 1 추진개요, PDF 페이지 1 추진일정
          </div>

          <label>Related</label>
          <div className="result-box">
            - 재건축 목적은 무엇인가?<br />
            - 추진기간은 언제인가?<br />
            - 신청대상은 누구인가?<br />
            - 추진내용은 무엇인가?
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeepResearchResultPage;
