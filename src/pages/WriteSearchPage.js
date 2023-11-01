import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import WriteSearchResult from './WriteSearchResult'; // 검색 결과 컴포넌트를 import

function WriteSearchPage({ results }) {
    if (results === null) {
        return <p>검색 결과를 기다리는 중...</p>;
        }

    if (!results || results.length === 0) {
    return <p>검색 결과가 없습니다.</p>;
    }
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [nation, setNation] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch('/api/search_movie/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, director, nation }),
      });
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data); // 검색 결과를 상태로 저장
      } else {
        console.error('Error searching movie');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>영화 검색</h1>
      <TextField
        label="영화 제목"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="감독"
        variant="outlined"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
      />
      <TextField
        label="국가"
        variant="outlined"
        value={nation}
        onChange={(e) => setNation(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        검색
      </Button>

      <WriteSearchResult results={searchResults} /> {/* 검색 결과 컴포넌트에 결과 전달 */}
    </div>
  );
}

export default WriteSearchPage;