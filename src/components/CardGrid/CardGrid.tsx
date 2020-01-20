import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import { CardData } from '../../types/Interfaces';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  text-align: center;
  color: #000;
  align-content: center;
  justify-content: center;
  margin: 1em 1em;

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    margin: 1em 10em;
  }
`;

interface Props {
  data: Array<CardData>;
}

const CardGrid: React.FC<Props> = props => {
  const { data } = props;
  console.log(data[0]);
  return (
    <Grid>
      {data.map(d => {
        return (
          <Card title={d.title} description={d.description} image={d.image} />
        );
      })}
    </Grid>
  );
};

export default CardGrid;
