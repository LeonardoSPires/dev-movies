import React from 'react';
import PropTypes from 'prop-types';

import getImages from '../../utils/getImages';
import { TitleCard } from './styles';
import { ImgCard } from './styles';
import { ContainerCard } from './styles';

function Card({ item }) {
    return (
        <ContainerCard>
            <ImgCard 
                src={
                    getImages(
                    item.poster_path || 
                    item.profile_path || 
                    "")
                    } />
            <TitleCard>
                    {item.title || item.name }
            </TitleCard>             
        </ContainerCard>
    );
}

Card.propTypes = {
    item: PropTypes.object.isRequired, // Ou defina a estrutura exata se quiser mais precisão
};

export default Card;