import { combineReducers } from 'redux';
import moviesReducer from './movies';
import writeReducer from './write'; // Import your write reducer here
import settingsReducer from './settings';

const rootReducer = combineReducers({
  movies: moviesReducer,
  write: writeReducer,
  settings: settingsReducer,
  // Add other reducers as needed
});

export default rootReducer;