import React, { useState, useEffect } from "react";
import MOVIES_DATA from "../database/Movies.database";
import Calc from "./Calc/Calc.component";
import Table from "./Table/Table.component";

let movieDB = MOVIES_DATA;
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const columns = [
    { path: "image", name: "" },
    { path: "title", name: "Title" },
    { path: "genre", name: "Genre" },
    { path: "seen", name: "Seen" },
    { path: "rating", name: "Rate" },
    { path: "button", name: "" },
    { path: "like", name: "Liked" },
  ];

  const handleDelete = (deleteMovie) => {
    const newMovieList = movies.filter((movie) => movie !== deleteMovie);
    setMovies(newMovieList);
  };

  const handleIcon = (movie) => {
    let moviesArray = [...movies];
    let movieIndex = moviesArray.indexOf(movie);
    moviesArray[movieIndex].like = !moviesArray[movieIndex].like;

    setMovies(moviesArray);
  };

  useEffect(() => {
    setMovies(movieDB);
  }, [movieDB]);

  if (movies.length === 0) return "No movies in the list";

  return (
    <div>
      <h1>
        Currently there are {movies.length} in the list
        <i className="fa fa-heart" aria-hidden="true" />
      </h1>
      <Table
        movies={movies}
        columns={columns}
        onDelete={handleDelete}
        handleIcon={handleIcon}
      />

      {/* <Calc /> */}
    </div>
  );
};

export default Movies;
