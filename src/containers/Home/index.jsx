import React from "react";
import api from "../../services/api";
import { Background, Info, Poster, Container, ContainerButtons } from "./styles";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import  getImages  from "../../utils/getImages";

function Home() {

  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popSeries, setPopSeries] = useState();
  const [topPeople, setTopPeople] = useState();

  useEffect(() => {
    async function getMovies() {
      try {
        const { 
          data: { results} 
        } = await api.get('/movie/popular');
        
        setMovie(results[0]);

      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
  
    async function getTopMovies() {
      try {
        const {
          data: { results }
        } = await api.get('/movie/top_rated');
        console.log(results);
        setTopMovies(results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    async function getTopSeries() {
      try {
        const {
          data: { results }
        } = await api.get('/tv/top_rated');
        console.log(results);
        setTopSeries(results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    async function getPopSeries() {
      try {
        const {
          data: { results }
        } = await api.get('/tv/popular');
        console.log(results);
        setPopSeries(results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    async function getTopPeople() {
      try {
        const {
          data: { results }
        } = await api.get('/person/popular');
        console.log(results);
        setTopPeople(results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    getMovies();
    getTopMovies();
    getTopSeries();
    getPopSeries();
    getTopPeople();
  }, []);

  return (

    <>
    {movie && (
      <Background $img={getImages(movie.backdrop_path)}>

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
          <img src={getImages(movie.poster_path)} alt={movie.title}/>
        </Poster>
        </Container>
      </Background>
    )}
    {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
    {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
    {popSeries && <Slider info={popSeries} title={'Séries populares'} />}
    {topPeople && <Slider info={topPeople} title={'Top Artistas'} />}
    </>
  );
}

export default Home;