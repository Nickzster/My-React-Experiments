import React from 'react';
import styled from 'styled-components';
import { CardData } from '../../types/Interfaces';

const StyledCard = styled.div`
  box-shadow: 1px 5px 20px 1px gray;
  margin: 1em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  transition: transform 200ms ease-in;
  max-width: 25rem;

  &:hover {
    transform: scale(1.05);
    transition: transform 200ms ease-in;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Card: React.FC<CardData> = props => {
  const { image, title, description, url } = props;
  return (
    <StyledCard>
      <Image src={image} />
      {title === undefined ? null : <h3>{title}</h3>}
      <p>{description}</p>
    </StyledCard>
  );
};

export default Card;
