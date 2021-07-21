const initialState = {
  moviesFavorites: [],
  moviesLoaded: [],
  movieDetail: undefined,
};
function rootReducer(state = initialState, action) {
  if (action.type === "ADD_MOVIE_FAVORITE") {
    return {
      ...state,
      moviesFavorites: state.moviesFavorites.concat(action.payload),
    };
  }
  if (action.type === "GET_MOVIES") {
    return {
      ...state,
      moviesLoaded: action.payload.Search,
    };
  }
  if (action.type === "GET_MOVIE_DETAIL") {
    return {
      ...state,
      movieDetail: action.payload,
    };
  }
  if (action.type === "REMOVE_FAVORITE_MOVIE") {
    return {
      ...state,
      moviesFavorites: state.moviesFavorites.filter(
        (movie) => movie.id !== action.payload
      ),
    };
  }
  return state;
}

export default rootReducer;
