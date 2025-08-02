// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import LibraryPage from './pages/LibraryPage';
import FavoritePage from './pages/FavoritePage';
import DeepResearchInputPage from './pages/DeepResearchInputPage';
import DeepResearchResultPage from './pages/DeepResearchResultPage';
import DocumentUploadPage from './pages/DocumentUploadPage';
import DocumentDetailPage from './pages/DocumentDetailPage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/deep-research" element={<DeepResearchInputPage />} />
        <Route path="/deep-research/result" element={<DeepResearchResultPage />} />
        <Route path="/upload" element={<DocumentUploadPage />} />
        <Route path="/document-detail" element={<DocumentDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
