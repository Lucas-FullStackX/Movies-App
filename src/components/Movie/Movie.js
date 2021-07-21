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
          <div>
            <h2>{this.props.movie.Title}</h2>
            <img src={this.props.movie.Poster} alt="poster" />
            <h4>Resume:</h4>
            <p>{this.props.movie.Plot}</p>
          </div>
        ) : (
          <img src="https://acegif.com/wp-content/uploads/loading-21.gif" />
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
