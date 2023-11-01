// ../store/actions/movies.js

export const setMovieSelection = (movie) => {
    return {
      type: 'SET_MOVIE_SELECTION',
      payload: movie,
    };
  };

export const setSearchResults = (data) => {
  return {
    type: 'SET_SEARCH_RESULTS',
    payload: data,
  };
};
