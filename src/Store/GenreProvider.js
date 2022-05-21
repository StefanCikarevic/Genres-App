import React from "react";
import GenreContext from "./genre-context";
import { useReducer } from "react";

const defaultGenreState = {
  selectedGenres: {},
  selectedSubgenres: {},
};

const genreReducer = (state, action) => {
  if (action.type === "SELECT_GENRE") {
    const genre = {
      id: action.genre.id,
      name: action.genre.name,
    };
    if (genre) {
      return {
        selectedGenres: genre,
        selectedSubgenres: {},
      };
    }
  }

  if (action.type === "SELECT_SUBGENRE") {
    return {
      selectedGenres: state.selectedGenres,
      selectedSubgenres: action.subgenre,
    };
  }

  return {
    selectedGenres: {},
    selectedSubgenres: {},
  };
};

const GenreProvider = (props) => {
  const [genreState, dispatch] = useReducer(genreReducer, defaultGenreState);

  const setSelectedGenresHandler = (genre) => {
    dispatch({ type: "SELECT_GENRE", genre: genre });
  };

  const setSelectedSubgenresHandler = (subgenre) => {
    dispatch({ type: "SELECT_SUBGENRE", subgenre: subgenre });
  };

  const genreContext = {
    selectedGenres: genreState.selectedGenres,
    selectedSubgenres: genreState.selectedSubgenres,
    setSelectedGenres: setSelectedGenresHandler,
    setSelectedSubgenres: setSelectedSubgenresHandler,
  };

  return (
    <GenreContext.Provider value={genreContext}>
      {props.children}
    </GenreContext.Provider>
  );
};

export default GenreProvider;
