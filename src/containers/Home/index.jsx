import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Background, Info, Poster, Container, ContainerButtons } from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import getImages from "../../utils/getImages";
import sliderConfigs from "../../utils/sliderConfigs";
import Modal from "../../components/Modal";
import useFetchLists from "../../services/getData";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const highlightRef = useRef();
  const navigate = useNavigate();

  // Use o hook para buscar os dados
  const { lists, mainHighlight } = useFetchLists(sliderConfigs);
  const highlight = selectedItem || mainHighlight;

  function handleSelectItem(item, type) {
    setSelectedItem({ ...item, _type: type });
    console.log("Item selecionado:", type);
    setTimeout(() => {
      highlightRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
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
            <Poster style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: "0 0 300px" }}>
              <img
                src={getImages(highlight.poster_path || highlight.profile_path)}
                alt={highlight.title || highlight.name}
              />
            </Poster>
            <Info>
              <h1>{highlight.title || highlight.name}</h1>
              <p>
                {highlight.overview ||
                  highlight.known_for_department ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, massa erat ultricies enim, nec dictum ex enim nec urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
              </p>
              <ContainerButtons>
               <Button onClick={() => {
                 const type = highlight._type || highlight.media_type || 'movie';
                 navigate(`/detalhe/${type}/${highlight.id}`);
               }}
               red={true}
               >
                 Detalhes
               </Button>
                <Button onClick={
                  () => setShowModal(true)} red={false}>
                    Assistir Trailer
                </Button>
              </ContainerButtons>
            </Info>
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