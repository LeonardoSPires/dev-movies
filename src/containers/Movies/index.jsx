import React from "react";
import ContentList from "../../components/ContentList";
import { Title } from "../../components/ContentList/styles";

function Movies() {
  return (
    <>
      <Title style={{ paddingTop: "5rem" }}>Filmes</Title>
      <ContentList title="Filmes Populares" endpoint="/movie/popular" type="movie" />
      <ContentList title="Melhores Filmes" endpoint="/movie/top_rated" type="movie" />
    </>
  );
}

export default Movies;
