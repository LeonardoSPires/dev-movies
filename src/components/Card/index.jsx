import React from 'react';
import PropTypes from 'prop-types';

import getImages from '../../utils/getImages';
import { TitleCard } from './styles';
import { ImgCard } from './styles';
import { ContainerCard } from './styles';

function Card({ item, selectCard }) {
  return (
    <ContainerCard onClick={selectCard}>
      <ImgCard 
        src={getImages(item.poster_path || item.profile_path || "")}
        alt={item.title || item.name}
      />
      <TitleCard>
        {item.title || item.name}
      </TitleCard>
    </ContainerCard>
  );
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  selectCard: PropTypes.func,
};

export default Card;