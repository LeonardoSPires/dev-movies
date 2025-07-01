import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Background, Info, Poster, Container, ContainerButtons } from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import getImages from "../../utils/getImages";
import sliderConfigs from "../../utils/sliderConfigs";
import Modal from "../../components/Modal";


function Home() {
  const [mainHighlight, setMainHighlight] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [lists, setLists] = useState({});

  // Função genérica para buscar dados
  async function fetchList(endpoint, key, setHighlight = false) {
    try {
      const { data: { results } } = await api.get(endpoint);
      console.log("Resultados recebidos para", key, ":", results); // Mostra os dados recebidos
      setLists(prev => ({ ...prev, [key]: results }));
      if (setHighlight && results.length > 0) setMainHighlight(results[0]);
    } catch (error) {
      console.error(`Error fetching ${key}:`, error);
    }
  }

  useEffect(() => {
    sliderConfigs.forEach(cfg => {
      fetchList(cfg.endpoint, cfg.key, cfg.key === "popMovies");
    });
  }, []);

  const highlight = selectedItem || mainHighlight;

  function handleSelectItem(item) {
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {highlight && (
        <Background $img={getImages(highlight.backdrop_path || highlight.profile_path)}>
          <Modal movieId={highlight.id} />
          <Container>
            <Info>
              <h1>{highlight.title || highlight.name}</h1>
              <p>
                {highlight.overview ||
                  highlight.known_for_department ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, massa erat ultricies enim, nec dictum ex enim nec urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
              </p>
              <ContainerButtons>
                <Button red={true}>Assista Agora</Button>
                <Button red={false}>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img
                src={getImages(highlight.poster_path || highlight.profile_path)}
                alt={highlight.title || highlight.name}
              />
            </Poster>
          </Container>
        </Background>
      )}
      {sliderConfigs.map(cfg =>
        lists[cfg.key] ? (
          <Slider
            key={cfg.key}
            info={lists[cfg.key]}
            title={cfg.title}
            onSelect={handleSelectItem}
          />
        ) : null
      )}
    </>
  );
}

export default Home;