import { SET_POST_TITLE, SET_POST_CONTENT, SET_POST_RATING, SET_STEP, SUBMIT_FORM } from './actionTypes';

export const setPostTitle = (title) => ({
  type: SET_POST_TITLE,
  payload: title,
});

export const setPostContent = (content) => ({
  type: SET_POST_CONTENT,
  payload: content,
});

export const setPostRating = (rating) => ({
  type: SET_POST_RATING,
  payload: rating,
});

export const setStep = (step) => ({
  type: SET_STEP,
  payload: step,
});

export const submitForm = () => ({
  type: SUBMIT_FORM,
});