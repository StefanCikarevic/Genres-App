import React from "react";

const GenreContext = React.createContext({
  selectedGenres: {
    id: "",
    name: "",
  },
  selectedSubgenres: {
    id: "",
    name: "",
    isDescriptionRequired: false,
  },
  setSelectedGenres: (genre) => {},
  setSelectedSubgenres: (subgenre) => {},
});

export default GenreContext;
