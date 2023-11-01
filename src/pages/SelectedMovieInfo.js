import React from 'react';

function SelectedMovieInfo({ selectedMovie }) {
  if (!selectedMovie) {
    return <p>영화를 선택해주세요.</p>;
  }

  return (
    <div>
      <h2>선택한 영화 정보</h2>
      <img src={selectedMovie.posterUrl} alt={selectedMovie.title} />
      <p>제목: {selectedMovie.title}</p>
      <p>감독: {selectedMovie.directorNm}</p>
    </div>
  );
}

export default SelectedMovieInfo;

