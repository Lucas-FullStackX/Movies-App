import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id);
  }

  render() {
    return (
      <div className="movie-detail">
        {this.props.movie ? (
          <div className="detail">
            <h2>{this.props.movie.Title}</h2>
            <img src={this.props.movie.Poster} alt="poster" />
            <p>
              <b>Year: </b>
              {this.props.movie.Year} {this.props.movie.Country}
            </p>
            <p>
              <b>Resume:</b>
              <br />
              {this.props.movie.Plot}
            </p>
            <p>
              <b>Genre: </b>
              {this.props.movie.Genre}
            </p>
            <p>
              <b>Director: </b>
              {this.props.movie.Director}
            </p>
            <p>
              <b>Actors: </b>
              {this.props.movie.Actors}
            </p>
            <p>
              <b>Writer: </b>
              {this.props.movie.Writer}
            </p>
          </div>
        ) : (
          <img
            src="https://acegif.com/wp-content/uploads/loading-21.gif"
            alt="cargando"
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}

export default connect(mapStateToProps, { getMovieDetail })(Movie);
