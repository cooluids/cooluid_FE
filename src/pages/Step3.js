import React from 'react';

function Step3({ selectedMovie, postTitle, postContent, postRating, isPublic }) {
  return (
    <div>
      <h1>Step 3: Review Your Input</h1>
      <p>Please review your input before submitting:</p>
      
      {selectedMovie ? (
        <div>
          <h2>Selected Movie</h2>
          <p>Title: {selectedMovie.title}</p>
          <p>Director: {selectedMovie.directorNm}</p>
        </div>
      ) : null}

      {postTitle ? (
        <div>
          <h2>Post Title</h2>
          <p>{postTitle}</p>
        </div>
      ) : null}

      {postContent ? (
        <div>
          <h2>Post Content</h2>
          <p>{postContent}</p>
        </div>
      ) : null}

      {postRating !== null ? (
        <div>
          <h2>Post Rating</h2>
          <p>{postRating}</p>
        </div>
      ) : null}

      {isPublic !== null ? (
        <div>
          <h2>Is Public</h2>
          <p>{isPublic ? 'Public' : 'Private'}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Step3;