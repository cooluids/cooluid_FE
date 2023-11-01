import React, { useState } from 'react';
import A from './A';

function WriteSearchMovie() {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [nation, setNation] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = () => {
    const apiUrl = 'http://localhost:8000/check_session/search_movie/';
    const requestData = {
      title,
      director,
      nation,
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>영화 검색</h1>
      <A
        title={title}
        director={director}
        nation={nation}
        onTitleChange={setTitle}
        onDirectorChange={setDirector}
        onNationChange={setNation}
        onSearch={handleSearch}
      />
      {/* 검색 결과 표시 */}
      {searchResults && (
        <div>
          <h2>검색 결과</h2>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id}>{result.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WriteSearchMovie;