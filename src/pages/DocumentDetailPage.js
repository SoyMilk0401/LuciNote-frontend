// src/pages/DocumentDetailPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './DeepResearch.css';

function DocumentDetailPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const fileName = params.get('fileName');

  const content = `이곳에 문서 내용이 출력됩니다.\n\n(※ 실제 구현 시 파일 내용을 읽어와야 합니다)`;

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* 사이드바는 position: fixed로 고정 */}
      <Sidebar />

      {/* 본문 전체 */}
      <div style={{ marginLeft: '200px', display: 'flex', height: '100vh' }}>
        {/* 왼쪽: 문서 내용 */}
        <div
          style={{
            width: '50%',
            padding: '30px',
            overflowY: 'auto',
            backgroundColor: '#fff',
            borderRight: '1px solid #ddd',
            boxSizing: 'border-box',
          }}
        >
          <h2>{fileName || '업로드된 문서'}</h2>
          <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', color: '#444' }}>
            {content}
          </div>
        </div>

        {/* 오른쪽: 딥 리서치 결과 */}
        <div
          style={{
            width: '50%',
            padding: '30px',
            backgroundColor: '#f9f9f9',
            overflowY: 'auto',
            boxSizing: 'border-box',
          }}
        >
          <h2 style={{ fontSize: '20px', marginBottom: '30px' }}>
            딥 리서치 - 사용자 맞춤 문서 요약 및 분석
          </h2>

          <div className="result-section">
            <label>Topic</label>
            <div className="result-box">재건축 일정 단계</div>

            <label>Answer</label>
            <div className="result-box">
              재건축은 사업 추진 일정에 따라 정비계획 수립, 조합 설립, 시공사 선정,
              이주/철거, 착공 등으로 단계가 나뉩니다.
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
    </div>
  );
}

export default DocumentDetailPage;
