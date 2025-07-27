import React from "react";
import ContentList from "../../components/ContentList";
import { Title } from "../../components/ContentList/styles";

function Series() {
  return (
    <>
      <Title style={{ paddingTop: "5rem" }}>Séries</Title>
      <ContentList title="Séries Populares" endpoint="/tv/popular" type="tv" />
      <ContentList title="Melhores Séries" endpoint="/tv/top_rated" type="tv" />
    </>
  );
}

export default Series;
