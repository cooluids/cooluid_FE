const initialState = {
  selectedMovie: null,
  searchResults: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE_SELECTION':
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;