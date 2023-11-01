import './Nav.css';
import React, { useState, useEffect } from 'react';
import { Link, Routes,Route, useNavigate } from 'react-router-dom';
import LoginModal
from './Modal';
import axios from 'axios';



function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearch = () => {
      // 검색 버튼을 클릭할 때 실행할 검색 기능을 정의합니다.
      onSearch(searchTerm);
    };
}

function Nav() {
    const [sessionAuthenticated, setSessionAuthenticated] = useState(false);
    const [userProfileImage, setUserProfileImage] = useState(''); // 사용자 프로필 이미지 경로
    const navigate = useNavigate();

    useEffect(() => {
        // 서버에 세션 확인 요청 보내기
        fetch('http://localhost:8000/check_session/', {
          method: 'GET',
          credentials: 'include', // 세션 쿠키를 서버로 전송
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              setSessionAuthenticated(true); // 세션 인증 성공 시 상태 업데이트
              // 여기에서 사용자 정보를 가져오고 state 업데이트를 수행할 수 있습니다.
              setUserProfileImage(data.profile_picture); // 사용자 프로필 이미지 업데이트
            } else {
              setSessionAuthenticated(false); // 세션 인증 실패 시 상태 업데이트
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            setSessionAuthenticated(false); // 에러 시 상태 업데이트
          });
      }, []);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showLeftDetails, setShowLeftDetails] = useState(false);
    const [showRightDetails, setShowRightDetails] = useState(false);

    const handleLeftMouseEnter = () => {
        setShowLeftDetails(true);
    };

    const handleRightMouseEnter = () => {
        setShowRightDetails(true);
    };
      
    const handleMouseLeave = () => {
        setShowLeftDetails(false);
        setShowRightDetails(false);
    };

    const handleLoginClick = () => {
      setShowLoginModal(true);
    };
    
      const handleLogoutClick = async () => {
        try {
          const response = await axios.post('http://localhost:8000/logout/', null, {
            withCredentials: true, 
          });
      
          if (response.status === 200) {
            setSessionAuthenticated(false);
            navigate("/", { replace: true });
          } else {
          }
        } catch (error) {
          console.error('로그아웃 요청 오류:', error);
        }
      };
    return (
        <header className='Header_block'>
            <div className='Header_innerBlock'>
                <div className='Header_left' onMouseEnter={handleLeftMouseEnter} onMouseLeave={handleMouseLeave}>
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 26.794 26.794">
                    <g>
                        <g>
                            <path d="M8.322,25.069l10.12-19.574c0.658-1.271,0.412-2.742-0.511-3.564c-0.127-0.407-0.356-0.824-0.72-1.172
                                c-0.458-0.437-1.082-0.719-1.775-0.755c-1.396-0.083-2.712,0.947-3.16,2.125c-0.202,0.216-0.035-0.271-0.554,0.544
                                C9.877,5.996,8.308,9.852,6.597,13.433c-0.614,0.631-2.02,3.281-2.378,4.444c0.085,0.128,0.932-1.717,0.997-1.623
                                c-0.292,1.045-1.506,2.978-2.15,4.311L2.557,21.5c-0.374,0.625-0.582,1.403-0.487,2.164c0.087,0.759,0.464,1.504,1.125,1.974
                                c0.202,0.147,0.434,0.251,0.677,0.332c0.192,0.213,0.411,0.402,0.677,0.539C5.869,27.191,7.557,26.548,8.322,25.069z
                                M3.645,25.681c-0.148-0.071-0.284-0.154-0.408-0.251c-0.006-0.004-0.013-0.01-0.019-0.015c-0.477-0.381-0.768-0.934-0.891-1.522
                                c0.045,0.038,0.144,0.332,0.166,0.242c-0.144-0.846,0.024-1.656-0.102-1.562c0.192-0.512,0.628-0.995,1.02-1.574
                                c0.395-0.562,0.786-1.152,1.109-1.726c0.066-0.198-0.257,0.275-0.121-0.04c0.981-1.227,2.037-3.501,1.914-3.679
                                c-0.854,1.625-1.877,3.23-2.89,4.844c0.183-0.325,0.363-0.643,0.546-0.964c2.061-3.585,3.966-7.473,5.865-11.371l1.727-3.522
                                l0.874-1.742c0.285-0.583,0.571-1.167,1.068-1.571c0.477-0.415,1.091-0.666,1.708-0.688c0.62-0.028,1.226,0.212,1.657,0.62
                                c0.103,0.096,0.19,0.202,0.27,0.31c-1.268-0.455-2.767,0.185-3.476,1.555L3.544,22.597C3,23.65,3.082,24.836,3.645,25.681z"/>
                        </g>
                    </g>
                </svg>
                {showLeftDetails  && (
                    <div className="left_details">
                        <ul className="left_nav-list">
                          <li><Link to="/contest">Contest</Link></li>
                          <li><Link to="/search">Search</Link></li>
                          <li><Link to="/debate">Debate</Link></li>
                        </ul>
                    </div>
                )}
                </div>
            
                <div className='HeaderLogo_block'>
                    <Link to="/"><img href='/' src="/logo.svg" width="200" height="100"/></Link>
                </div>

                <div className='Header_right' onMouseEnter={handleRightMouseEnter} onMouseLeave={handleMouseLeave}>
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="-26.794 0 26.794 26.794">
                    <g transform="scale(-1, 1)">
                        <g>
                            <path d="M8.322,25.069l10.12-19.574c0.658-1.271,0.412-2.742-0.511-3.564c-0.127-0.407-0.356-0.824-0.72-1.172
                                c-0.458-0.437-1.082-0.719-1.775-0.755c-1.396-0.083-2.712,0.947-3.16,2.125c-0.202,0.216-0.035-0.271-0.554,0.544
                                C9.877,5.996,8.308,9.852,6.597,13.433c-0.614,0.631-2.02,3.281-2.378,4.444c0.085,0.128,0.932-1.717,0.997-1.623
                                c-0.292,1.045-1.506,2.978-2.15,4.311L2.557,21.5c-0.374,0.625-0.582,1.403-0.487,2.164c0.087,0.759,0.464,1.504,1.125,1.974
                                c0.202,0.147,0.434,0.251,0.677,0.332c0.192,0.213,0.411,0.402,0.677,0.539C5.869,27.191,7.557,26.548,8.322,25.069z
                                M3.645,25.681c-0.148-0.071-0.284-0.154-0.408-0.251c-0.006-0.004-0.013-0.01-0.019-0.015c-0.477-0.381-0.768-0.934-0.891-1.522
                                c0.045,0.038,0.144,0.332,0.166,0.242c-0.144-0.846,0.024-1.656-0.102-1.562c0.192-0.512,0.628-0.995,1.02-1.574
                                c0.395-0.562,0.786-1.152,1.109-1.726c0.066-0.198-0.257,0.275-0.121-0.04c0.981-1.227,2.037-3.501,1.914-3.679
                                c-0.854,1.625-1.877,3.23-2.89,4.844c0.183-0.325,0.363-0.643,0.546-0.964c2.061-3.585,3.966-7.473,5.865-11.371l1.727-3.522
                                l0.874-1.742c0.285-0.583,0.571-1.167,1.068-1.571c0.477-0.415,1.091-0.666,1.708-0.688c0.62-0.028,1.226,0.212,1.657,0.620
                                c0.103,0.096,0.19,0.202,0.27,0.31c-1.268-0.455-2.767,0.185-3.476,1.555L3.544,22.597C3,23.65,3.082,24.836,3.645,25.681z"/>
                        </g>
                    </g>
                </svg>
                {showRightDetails && (
                  <div className="right_details">
                    <ul className="right_nav-list">
                        {sessionAuthenticated ? (
                        <>
                          <li onClick={handleLogoutClick}><Link href="" className="button btnPush btnBlack">Log Out</Link></li>
                          <li><Link to="/write" className="button btnPush btnBlack">Create Post</Link></li>
                          <li><img src={userProfileImage} alt="User Profile" /></li>
                        </>
                        ) : (
                        <a className="button btnPush btnBlack" onClick={handleLoginClick}>Sign In</a>
                        )}
                    </ul>
                  </div>
                )}
                </div>
            </div>

      {showLoginModal && (
        <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      )}
    </header>
    
  );
}
export default Nav;