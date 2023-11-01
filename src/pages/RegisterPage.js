import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./RegisterPage.css";


function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    custom_user_id: "",
    email: "",
    about: "",
  });

  const [emailFetched, setEmailFetched] = useState(false);

  const code = new URLSearchParams(location.search).get("code");

  useEffect(() => {
    if (!code) {
      navigate("/");
    } else {
      fetch(`http://localhost:8000/get_email/?code=${code}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.email) {
            setFormData((prevData) => ({
              ...prevData,
              email: data.email,
            }));
            setEmailFetched(true);
          } else {
            console.error("Code not found");
            // 코드가 잘못된 경우에도 리디렉션 또는 처리 가능
            navigate("/"); // 또는 다른 경로로 리디렉션
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          // 에러가 발생한 경우에 대한 처리
          navigate(""); // 또는 다른 경로로 리디렉션
        });
    }
  }, [code, navigate]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (emailFetched) {
      fetch("http://localhost:8000/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            navigate("/");
          } else {
            console.error("Registration failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="wrapper">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="사용할 ID"
            name="custom_user_id"
            value={formData.custom_user_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="간단하게 자신을 소개해주세요"
            name="about"
            value={formData.about}
            onChange={handleChange}
            required
          />
        </div>
        <div className="policy">
          <input
            type="checkbox"
            name="acceptTerms"
          />
          <h3>모든 이용약관에 동의합니다.</h3>
        </div>
        <div className="input-box button">
          <input type="submit" value="Let's Cooluid" />
        </div>
      </form>
    </div>
  );
}

export default Register;