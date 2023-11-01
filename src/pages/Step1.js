import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import WriteSearchResult from './WriteSearchResult';
import SelectedMovieInfo from './SelectedMovieInfo'; 
import { useDispatch, useSelector } from 'react-redux';
import { setMovieSelection, setSearchResults } from '../store/actions/movies'; // setSearchResults 추가


function Step1() {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [nation, setNation] = useState('');

  const searchResults = useSelector((state) => state.movies.searchResults); // Redux로부터 검색 결과 가져오기
  const selectedMovie = useSelector((state) => state.movies.selectedMovie); // Redux로부터 선택한 영화 정보 가져오기

  const dispatch = useDispatch();

  const handleMovieSelect = async (movie) => {
    dispatch(setMovieSelection(movie));
  };
  
  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:8000/search_movie/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, director, nation }),
      });
      if (response.ok) {
        const data = await response.json();
        dispatch(setSearchResults(data)); 
      } else {
        console.error('Error searching movie');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const onTitleChange = (value) => {
    setTitle(value);
  }

  const onDirectorChange = (value) => {
    setDirector(value);
  }

  const onNationChange = (value) => {
    setNation(value);
  }

  return (
    <div>
      <TextField
        label="영화 제목"
        variant="outlined"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <TextField
        label="감독"
        variant="outlined"
        value={director}
        onChange={(e) => onDirectorChange(e.target.value)}
      />
      <TextField
        label="국가"
        variant="outlined"
        value={nation}
        onChange={(e) => onNationChange(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        검색
      </Button>
      <WriteSearchResult results={searchResults} onMovieSelect={handleMovieSelect} />
      <SelectedMovieInfo selectedMovie={selectedMovie} />
    </div>
  );
}

export default Step1;