import React from "react";
import { Link } from "react-router-dom";

const Movies = (props) => {
  console.log(props);
  let validMovies = props.movies.filter((movie) => movie.Poster !== "N/A");
  if (props.movies.length === 0) {
    return <h1 className="no-movies">Search for Movies</h1>;
  }
  return (
    <>
      {validMovies.map((movie, index) => (
        <Link to="/aboutMovie" onClick={props.onSave} key={index}>
          <div className="movie">
            <div>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="movie-title-parent">
              <h6 className="movie-title">{movie.Title.slice(0, 26)}</h6>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Movies;
