// Import any necessary action types
import { SET_PUBLIC } from './actionTypes';

// Initial state for the setting reducer
const initialState = {
  isPublic: true, // Set the default value to true or false as needed
};

// Reducer function
const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PUBLIC:
      return {
        ...state,
        isPublic: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;