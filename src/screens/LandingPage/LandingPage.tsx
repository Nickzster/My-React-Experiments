import React from 'react';
import { Container } from '../../components/Styled/Container';
import CardGrid from '../../components/CardGrid';
import data from '../../SampleData/data.json';

const LandingPage: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <h1>My Container!</h1>
      </Container>
      <CardGrid data={data} />
    </React.Fragment>
  );
};

export default LandingPage;
