import React from 'react';
import { LinearProgress } from '@material-ui/core';
import './Write.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, submitForm } from '../store/actions/write'; // 필요한 액션을 가져오세요
import { setPublic } from '../store/actions/settings'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const WritePage = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.write.step);
  const selectedMovie = useSelector((state) => state.movies.selectedMovie);
  const postTitle = useSelector((state) => state.write.postTitle);
  const postContent = useSelector((state) => state.write.postContent);
  const postRating = useSelector((state) => state.write.postRating);
  const isPublic = useSelector((state) => state.settings.isPublic);

  const handleBack = () => {
    dispatch(setStep(step - 1));
  };

  const handleNext = () => {
    if (step < 3) {
      dispatch(setStep(step + 1));
    }

    if (step === 3) {
      // 공개 여부 설정을 디스패치
      dispatch(setPublic(isPublic));
    }

  };

  const handleSubmit = () => {
    const postData = {
      title: postTitle,
      content: postContent,
      rating: postRating,
      isPublic: isPublic,
      movie_title: selectedMovie.title,
      movie_director: selectedMovie.directorNm,
      posterurl: selectedMovie.posterUrl,
      movieId: selectedMovie.movieId,
    }; // form 제출 로직을 처리하는 액션을 디스패치

    fetch('http://localhost:8000/post_create/', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (response.ok) {
          // Handle a successful response (e.g., display a success message)
        } else {
          // Handle errors (e.g., show an error message)
        }
      })
      .catch((error) => {
        // Handle request errors
      });
  };

  return (
    <div>
      <div className="progress-container">
        <div className="progress-label">
          {step < 3 && `${step}단계 작업 중`}
          {step === 3 && '작업 완료'}
        </div>
        <LinearProgress
          value={(step) * 25} // 페이지 번호에 따른 값 설정
          variant="determinate"
          className="progress-bar"
        />
      </div>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 
        selectedMovie={selectedMovie}
        postTitle={postTitle}
        postContent={postContent}
        postRating={postRating}
        isPublic={isPublic}/>}
      <div className="LowBar">
        <div className="button-container">
          {step > 1 && (
            <button onClick={handleBack} className="button btnPush btnBlack">
              Back
            </button>
          )}

          {step < 3 && (
            <button onClick={handleNext} className="button btnPush btnBlack">
              Next
            </button>
          )}

          {step === 3 && (
            <button onClick={handleSubmit} className="button btnPush btnBlack">
              Submit
            </button>
          )}

          <div className="spacer" />

          <button onClick={() => dispatch(setStep(1))} className="button btnPush btnBlack">
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
