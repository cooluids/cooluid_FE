// Import any necessary action types
import { SET_PUBLIC } from './actionTypes';

// Action creators
export const setPublic = (isPublic) => ({
  type: SET_PUBLIC,
  payload: isPublic,
});