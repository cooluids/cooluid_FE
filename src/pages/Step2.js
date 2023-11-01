import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from 'react-redux';
import { setPostTitle, setPostContent, setPostRating } from '../store/actions/write';

function Step2() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); // Added content state
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  // Additional state to get postTitle and postRating from Redux store
  const postTitle = useSelector((state) => state.write.postTitle);
  const postRating = useSelector((state) => state.write.postRating);

  // Set the initial values of title and rating from Redux store
  if (!title && postTitle) {
    setTitle(postTitle);
  }

  if (!rating && postRating) {
    setRating(postRating);
  }

  const handleSave = () => {
    dispatch(setPostTitle(title));
    dispatch(setPostContent(content)); // Save post content to Redux store
    dispatch(setPostRating(rating));
  }

  return (
    <div>
      <h2>Step 2: 영화 평론 작성</h2>
      <div>
        <TextField
          label="게시물 제목"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="영화 평론"
          multiline
          rows={4}
          variant="outlined"
          value={content} // Bind content to the state
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="영화 별점"
          type="number"
          variant="outlined"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <Button variant="contained" onClick={handleSave}>
        확인
      </Button>
    </div>
  );
}

export default Step2;