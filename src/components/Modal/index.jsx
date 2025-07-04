import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Background } from './styles';
import api from '../../services/api';


function Modal({ movieId, type, setShowModal }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getVideos() {
      const {
        data: { results }
      } = await api.get(`/${type}/${movieId}/videos`);
      setMovie(results[0]);
    }
    getVideos();
  }, [movieId, type]);

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://www.youtube.com/embed/${movie.key}`}
            title='YouTube video player'
            height={"500px"}
            width={"100%"}
          />
        </Container>
      )}
    </Background>
  );
}

Modal.propTypes = {
  movieId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  type: PropTypes.oneOf(["movie", "tv"]).isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default Modal;