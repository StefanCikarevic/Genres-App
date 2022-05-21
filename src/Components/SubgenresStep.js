import React from "react";
import { useContext } from "react";
import GenreContext from "../Store/genre-context";
import { Text, Flex, Wrap } from "@chakra-ui/react";

const SubgenresStep = (props) => {
  const genreCtx = useContext(GenreContext);
  console.log(genreCtx);
  const genres = props.genresList;
  const subgenres = genres.filter(
    (genre) => genre.id === genreCtx.selectedGenres.id
  )[0].subgenres;
  console.log(subgenres);

  const selectSubgenresHandler = (subgenre) => {
    console.log(subgenre);
    genreCtx.setSelectedSubgenres(subgenre);
  };

  return (
    <Wrap>
      {subgenres.map((subgenre) => {
        return (
          <Flex
            key={subgenre.id}
            justifyContent="center"
            alignItems="center"
            borderWidth={1}
            px={4}
            py={2}
            onClick={selectSubgenresHandler.bind(null, subgenre)}
          >
            <Text>{subgenre.name}</Text>
          </Flex>
        );
      })}
    </Wrap>
  );
};

export default SubgenresStep;
