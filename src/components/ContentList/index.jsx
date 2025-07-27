import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Slider from "../Slider";
import { Container, Title } from "./styles";
import PropTypes from 'prop-types';

function ContentList({ title, endpoint, type = "movie" }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get(endpoint);
        const results = data.results.map(item => ({ ...item, _type: type }));
        setItems(results);
      } catch (error) {
        console.error(`Erro ao buscar ${title}:`, error);
      }
    }

    fetchData();
  }, [endpoint, type, title]);

  function handleSelectItem(item) {
    const contentType = item._type || item.media_type || "movie";
    navigate(`/detalhe/${contentType}/${item.id}`);
  }

  if (items.length === 0) {
    return <div>Carregando {title}...</div>;
  }

  return (
    <> 
    <Container>
      <Title></Title>
      <Slider title={title} info={items} onSelect={handleSelectItem} />
    </Container>
    </>
  );
}

ContentList.propTypes = {
  title: PropTypes.string.isRequired,
  endpoint: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['movie', 'tv'])
};

export default ContentList;
