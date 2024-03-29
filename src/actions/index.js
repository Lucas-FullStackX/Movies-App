const KEY = process.env.REACT_APP_KEY;
//funciones
export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${titulo}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIES", payload: json });
      })
      .catch((err) => console.log(err));
  };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
      });
  };
}
export function removeMovieFavorite(id) {
  return { type: "REMOVE_FAVORITE_MOVIE", payload: id };
}
