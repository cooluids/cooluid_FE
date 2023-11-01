import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = ({ onClose }) => {
  // 모달 닫기
  const handleCloseModal = () => {
    onClose();
  };


  //토글 로직
  const [toggle, setToggle] = useState(false);

  const btnClassName = [
    "toggle-btn",
    toggle ? "toggle-btn-on" : "toggle-btn-off",
  ].join(" ");

  const handleClickToggle = () => {
    setToggle((prev) => !prev);
  };


  //로그인,회원가입 로직
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:8000/sign_in/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        console.log('로그인 메일 전송 완료');
        setMessage('로그인 메일 전송 완료');
        setIsSent(true);
      } else {
        setMessage('로그인 메일 전송 실패');
      }
      // ... (이후 코드와 동일)
    } catch (error) {
      // ... (에러 처리 코드와 동일)
    }
  };

  
  //로그인,회원가입 로직
  const handleSignUp = async () => {
    try {
        const response = await fetch('http://localhost:8000/sign_up/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (response.status === 200) {
          console.log('회원가입 메일 전송 완료');
          setMessage('회원가입 메일 전송 완료');
          setIsSent(true);
        } else {
          setMessage('회원가입 메일 전송 실패');
        }
        // ... (이후 코드와 동일)
      } catch (error) {
        // ... (에러 처리 코드와 동일)
      }
    };
  
  return (
    <div className="modal-background">
      <div className="modal-content">

        {isSent && <p>{message}</p>}

        {!isSent && (
          <div>
            <h1>{toggle ? '회원가입' : '로그인'}</h1>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {toggle ? (
              <div>
                <button className="toggle-button" onClick={handleSignUp}>회원가입</button>
              </div>
            ) : (
              <div>
                <button className="toggle-button" onClick={handleSignIn}>로그인</button>
              </div>
            )}
          </div>
        )}

        <div className="social-login">
          <h2>소셜 로그인/회원가입 - 구현 예정입니다.</h2>
          <button>카카오톡</button>
          <button>구글</button>
          <button>깃허브</button>
        </div>

        {!isSent && (
          <div className='toggle_container'>        
            <label className="toggle-container" aria-label="Toggle">
              <input
                className="toggle-input"
                type="checkbox"
                checked={toggle}
                onClick={handleClickToggle}
                data-testid="toggle-input"
              />
              <span className={btnClassName} />
            </label>
          </div>
        )}

        <button className="close-button" onClick={handleCloseModal}>
          닫기
        </button>

      </div>
    </div>
  );
};

export default LoginModal;