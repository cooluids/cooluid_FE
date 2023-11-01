// Import any necessary action types
import { SET_POST_TITLE, SET_POST_CONTENT, SET_POST_RATING, SET_STEP, SUBMIT_FORM } from './actionTypes';

// Initial state for the write reducer
const initialState = {
  postTitle: '',
  postContent: '',
  postRating: null,
  step: 1,
};

// Reducer function
const writeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_TITLE:
      return {
        ...state,
        postTitle: action.payload,
      };
    case SET_POST_CONTENT:
      return {
        ...state,
        postContent: action.payload,
      };
    case SET_POST_RATING:
      return {
        ...state,
        postRating: action.payload,
      };
    case SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case SUBMIT_FORM:
      // Handle form submission logic here, save data to your backend, etc.
      // You can also reset the state to its initial values if needed.
      return {
        ...state,
        postTitle: '',
        postContent: '',
        postRating: null,
        step: 1,
      };
    default:
      return state;
  }
};

export default writeReducer;