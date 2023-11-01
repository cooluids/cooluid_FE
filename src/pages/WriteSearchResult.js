import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function WriteSearchResult({ results, onMovieSelect }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    onMovieSelect(movie); // Callback to pass selected movie to parent component
  };

  if (!Array.isArray(results)) {
    console.log(results);
    results = []; // results가 배열이 아닌 경우 빈 배열로 초기화
  }

  if (results.length === 0) {
    return <p>검색 결과가 없습니다.</p>;
  }

  return (
    <div>
      <h2>검색 결과</h2>
      {results.map((movie) => (
        <Card key={movie.movieId}> {/* movieId를 key로 사용 */}
            <CardContent>
            <Typography variant="h6">{movie.title}</Typography>
            <Button onClick={() => handleMovieSelect(movie)}>선택</Button>
            </CardContent>
        </Card>
        ))}
    </div>
  );
}

export default WriteSearchResult;