import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"; //usar p hacer link del titulo
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions/index";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies &&
            this.props.movies.map((movie) => (
              <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                <h3>{movie.id}</h3>
                <button onClick={() => this.props.removeMovie(movie.id)}>
                  X
                </button>
              </div>
            ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovie: (idMovie) => dispatch(removeMovieFavorite(idMovie)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
