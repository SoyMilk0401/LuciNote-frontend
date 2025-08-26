import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LibraryPage from './pages/LibraryPage';
import FavoritePage from './pages/FavoritePage';
import DeepResearchInputPage from './pages/DeepResearchInputPage';
import DeepResearchResultPage from './pages/DeepResearchResultPage';
import DocumentUploadPage from './pages/DocumentUploadPage';
import DocumentDetailPage from './pages/DocumentDetailPage';
import Sidebar from './components/Sidebar';
import SocialCallbackPage from './pages/SocialCallbackPage'; // 추가

// 사이드바가 포함된 레이아웃
const AppLayout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

// 로그인이 필요한 페이지를 위한 보호 라우트
const ProtectedRoute = () => {
  const { token } = useAuth();
  return token ? <AppLayout /> : <Navigate to="/login" />;
};

function App() {
  const { token } = useAuth();

  return (
    <Router>
      <Routes>
        {/* 로그인/회원가입 페이지는 사이드바가 없음 */}
        <Route path="/login" element={token ? <Navigate to="/main" /> : <LoginPage />} />
        <Route path="/register" element={token ? <Navigate to="/main" /> : <RegisterPage />} />
        <Route path="/auth/callback" element={<SocialCallbackPage />} /> {/* 추가 */}

        {/* 로그인이 필요한 페이지들 */}
        <Route element={<ProtectedRoute />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="/deep-research" element={<DeepResearchInputPage />} />
          <Route path="/deep-research/result" element={<DeepResearchResultPage />} />
          <Route path="/upload" element={<DocumentUploadPage />} />
          <Route path="/document-detail" element={<DocumentDetailPage />} />
        </Route>
        
        {/* 기본 경로 리다이렉션 */}
        <Route path="*" element={<Navigate to={token ? "/main" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
