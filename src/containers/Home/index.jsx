import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { Background, Info, Poster, Container, ContainerButtons } from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import getImages from "../../utils/getImages";
import sliderConfigs from "../../utils/sliderConfigs";
import Modal from "../../components/Modal";


function Home() {

  const [showModal, setShowModal] = useState(false);
  const [mainHighlight, setMainHighlight] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [lists, setLists] = useState({});
  const highlightRef = useRef(null);
  const navigate = useNavigate();

  // Função genérica para buscar dados
  async function fetchList(endpoint, key, setHighlight = false) {
    try {
      const { data: { results } } = await api.get(endpoint);
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

  function handleSelectItem(item, type) {
    setSelectedItem({ ...item, _type: type });
    setTimeout(() => {
      highlightRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Pequeno delay para garantir renderização
  }

  return (
    <>
      {highlight && (
        <Background
          ref={highlightRef}
          $img={getImages(highlight.backdrop_path || highlight.profile_path)}
        >
          {showModal && 
            <Modal
              movieId={highlight.id}
              type={highlight._type || (highlight.media_type === "tv" ? "tv" : "movie")}
              setShowModal={setShowModal}
            />}
          <Container>
            <Info>
              <h1>{highlight.title || highlight.name}</h1>
              <p>
                {highlight.overview ||
                  highlight.known_for_department ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, massa erat ultricies enim, nec dictum ex enim nec urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
              </p>
              <ContainerButtons>
                <Button onClick={() => navigate(`/detalhe/${highlight.id}`)} red={true}  >Assista Agora</Button>
                <Button onClick={() => setShowModal(true)} red={false}>Assista o Trailer</Button>
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
            onSelect={item => handleSelectItem(item, cfg.type)}
          />
        ) : null
      )}
    </>
  );
}

export default Home;