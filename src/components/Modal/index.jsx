import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Background } from './styles';
import api from '../../services/api';


function Modal({ movieId, setShowModal }) {
    const[movie, setMovie] = useState();
    
        useEffect(() => {
            async function getMovies() {
                const {
                    data: { results }
                } = await api.get(`/movie/${movieId}/videos`);

                console.log("Movie details:", results[0]);
                setMovie(results[0]);
            }

            getMovies();
        }, [])

        return (
            <Background onClick={() => setShowModal(false)}>
               {movie && (          
                <Container>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie.key}`}
                        title='YouTube video player'
                        height={"500px"}
                        width={"100%"}
                    >
                        <div>
                            {movieId}
                        </div>
                    </iframe>
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
  setShowModal: PropTypes.func.isRequired,
};

export default Modal;