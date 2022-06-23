import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Movie</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr>
                <td>{movie.title.toString()}</td>
                <td>{movie.genre.toString()}</td>
                <td>{movie.numberInStock.toString()}</td>
                <td>{movie.dailyRentalRate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
