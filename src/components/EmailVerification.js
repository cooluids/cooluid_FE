import React, { useState } from 'react';

function EmailVerificationForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendVerificationEmail = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/send-verification-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        setMessage('이메일을 확인해주세요! .');
      } else {
        setMessage('이메일을 사요할 수 없습니');
      }
    } catch (error) {
      console.error('오류가 발생했습니다.', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="이메일 주소"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendVerificationEmail}>이메일 보내기</button>
      <p>{message}</p>
    </div>
  );
}

export default EmailVerificationForm;
