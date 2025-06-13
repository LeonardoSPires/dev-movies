import React from "react";
import api from "../../services/api";
import { Background, Info, Poster, Container, ContainerButtons } from "./styles";
import { useState, useEffect } from "react";
import Button from "../../components/Button";

function Home() {

  const [movie, setMovies] = useState();

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await api.get('/movie/popular');
        setMovies(response.data.results[3]);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    

    getMovies()
  }, []);

  return (

    <>
    { movie && (
      <Background $img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>

        <Container>
          <Info>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <ContainerButtons>
            <Button red={true}>Assista Agora</Button>
            <Button red={false}>Assista o Trailer</Button>
          </ContainerButtons>
        </Info>
        <Poster>
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
        </Poster>
        </Container>
      </Background>
    ) }
    </>
  );
}

export default Home;