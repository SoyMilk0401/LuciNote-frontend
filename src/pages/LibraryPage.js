// src/pages/LibraryPage.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './LibraryPage.css';
import { format } from 'date-fns';

const mockDocuments = {
  '2025-08-09': ['요약문서_1.pdf', '회의기록_2.docx', '기획안.pptx', '정리본.hwp'],
  '2025-08-01': ['보고서_초안.hwp'],
  '2025-08-02': ['요약_정리본.pdf', '토론정리.docx'],
};

function LibraryPage() {
  const [selectedDate, setSelectedDate] = useState(new Date('2025-08-09'));
  const [showCalendar, setShowCalendar] = useState(false);

  const formattedDate = format(selectedDate, 'yyyy.MM.dd');
  const dateKey = format(selectedDate, 'yyyy-MM-dd');
  const documents = mockDocuments[dateKey] || [];

  return (
    <div className="library-container">
      <Sidebar />

      <div className="library-content">
        <div className="header">
          <h2>{formattedDate}의 작업결과</h2>
          <button onClick={() => setShowCalendar(!showCalendar)} className="calendar-toggle">
            ⬇️
          </button>
        </div>

        {showCalendar && (
          <div className="calendar-wrapper">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setShowCalendar(false);
              }}
              inline
            />
          </div>
        )}

        <div className="document-list">
          {documents.length === 0 ? (
            <p>이 날짜에는 작업된 문서가 없습니다.</p>
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

export default LibraryPage;
