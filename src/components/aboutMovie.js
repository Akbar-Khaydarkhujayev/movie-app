import React from "react";
import { Link } from "react-router-dom";

const AboutMovie = (props) => {
  const movie = props.movies.filter(
    (movie) => movie.Title === props.choosenMovies
  );
  return (
    <div className="about-movie">
      <div className="movie-poster">
        <img src={movie[0].Poster}></img>
      </div>
      <div className="about-movie-description">
        <h1>Title: {movie[0].Title}</h1>
        <h2>Year: {movie[0].Year}</h2>
        <h3>Type: {movie[0].Type} </h3>
        <h4>IMDB ID: {movie[0].imdbID}</h4>
      </div>
    </div>
  );
};

export default AboutMovie;
