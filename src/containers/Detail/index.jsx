import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getImages from "../../utils/getImages";
import { ContainerDetail, Background, Poster, Info, Description, GenreBadge, CastGrid, CastItem } from "./styles";
import api from "../../services/api";

function Detail() {
  const { type, id } = useParams();
console.log("Type:", type, "ID:", id);  // Deve mostrar os valores corretos


  const [item, setItem] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await api.get(`/${type}/${id}`);
        setItem(data);
      } catch (error) {
        console.error("Erro ao buscar item:", error);
        setItem(null);
      }
    }

    async function fetchCast() {
      try {
        const { data } = await api.get(`/${type}/${id}/credits`);
        setCast(data.cast);
      } catch (error) {
        console.error("Erro ao buscar créditos:", error);
        setCast([]);
      }
    }

    fetchItem();
    fetchCast();
  }, [id, type]);

  return (
    <>
      {item && (
        <ContainerDetail>
          <Background $img={getImages(item.backdrop_path || item.profile_path)}>
          </Background>
          <Info>
            <Poster>
              <img
                src={getImages(item.poster_path || item.profile_path)}
                alt={item.title || item.name}
              />
            </Poster>
            <Description>
              <h1>{item.title || item.name}</h1>
              <p><strong>Data de lançamento:</strong> {item.release_date || item.first_air_date}</p>
              <div>
                {item.genres && item.genres.map(genre => (
                  <GenreBadge key={genre.id}>{genre.name}</GenreBadge>
                ))}
              </div>
              <p>{item.overview}</p>
              <h2>Créditos</h2>
              <CastGrid>
                {cast.slice(0, 5).map(actor => (
                  <CastItem key={actor.id}>
                    <img src={getImages(actor.profile_path, "w185")} alt={actor.name} />
                    <span>{actor.name}</span>
                  </CastItem>
                ))}
              </CastGrid>
            </Description>
          </Info>
        </ContainerDetail>
      )}
    </>
  );
}

export default Detail;
