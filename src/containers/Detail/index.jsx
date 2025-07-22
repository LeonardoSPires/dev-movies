import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getImages from "../../utils/getImages";
import { ContainerDetail, Background, Poster, Info, Description } from "./styles";
import api from "../../services/api";

function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      // Troque 'movie' por 'tv' se for série
      const { data } = await api.get(`/movie/${id}`);
      setItem(data);
    }
    fetchItem();
  }, [id]);

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
              <p>{item.overview}</p>
              {/* Adicione outros detalhes aqui */}
        </Description>
        </Info>
        
      </ContainerDetail>
    
    )}
    </>
  );
}


export default Detail;