import React, { useState, useEffect } from "react";
import "./App.css";
import Movies from "./components/movie";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import AboutMovie from "./components/aboutMovie";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setSearchValue] = useState("");
  const [choosenMovie, setChoosenMovie] = useState("");

  const getMoviesRequest = async (inputValue) => {
    const API = `http://www.omdbapi.com/?s=${inputValue}&apikey=c6c2b122`;
    const response = await fetch(API);
    const responseJson = await response.json();
    if (responseJson.Response === "False") {
      console.log(responseJson);
    } else if (responseJson.Search) {
      setMovies(responseJson.Search);
      console.log(responseJson.Search);
    }
  };
  useEffect(() => {
    getMoviesRequest(inputValue);
  }, [inputValue]);

  function handleSave(target) {
    setChoosenMovie(target.target.alt);
  }

  return (
    <>
      <div className="App">
        <Navbar handleChange={setSearchValue} />
        <div className="movieParent">
          <Routes>
            <Route
              path=""
              element={<Movies movies={movies} onSave={handleSave}></Movies>}
            ></Route>
            <Route
              path="/aboutMovie"
              element={
                <AboutMovie
                  movies={movies}
                  choosenMovies={choosenMovie}
                ></AboutMovie>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
