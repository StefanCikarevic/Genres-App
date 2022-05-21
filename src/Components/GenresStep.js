import React from "react";
import { useContext } from "react";
import { Text, Flex, Wrap } from "@chakra-ui/react";
import GenreContext from "../Store/genre-context";

const GenresStep = (props) => {
  const genres = props.genresList;

  const genreCtx = useContext(GenreContext);

  const selectGenreHandler = (genre) => {
    genreCtx.setSelectedGenres(genre);
  };
  return (
    <Wrap>
      {genres.map((genre) => {
        return (
          <Flex
            key={genre.id}
            justifyContent="center"
            alignItems="center"
            borderWidth={1}
            px={4}
            py={2}
            onClick={selectGenreHandler.bind(null, genre)}
          >
            <Text>{genre.name}</Text>
          </Flex>
        );
      })}
    </Wrap>
  );
};

export default GenresStep;
