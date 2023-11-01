import React from 'react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import ContestPage from './pages/ContestPage'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import DebatePage from './pages/DebatePage'
import Register from './pages/RegisterPage'
import EmailSignInComponent from './pages/signin'
import WritePage from './pages/WritePage';


function App() {
  const [sessionCheckResult, setSessionCheckResult] = useState('');

  useEffect(() => {
    // 서버에 세션 확인 요청 보내기
    fetch('http://localhost:8000/check_session/', {
      method: 'GET',
      credentials: 'include', // 세션 쿠키를 서버로 전송
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSessionCheckResult('Success');
        } else {
          setSessionCheckResult('Session not found');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setSessionCheckResult('Error');
      });
  }, []);
  
  return (
    <div className='firstLay'>
      <div className='SecondLay ThirdLay'>
        <div className='FouthLay'>
          <div className='responsive'>
            <div className='BasicLay'>
              <Nav />
              <div className='BasicLay_main'>
                <p>Session Check Result: {sessionCheckResult}</p>
                <Routes>
                  <Route path="/contest" element={<ContestPage />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/debate" element={<DebatePage />} />
                  <Route path="/" element={<HomePage />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/email_signin" element={<EmailSignInComponent />} />
                  <Route path="/write" element={<WritePage />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
