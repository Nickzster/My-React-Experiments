import React from "react";
import { Container } from "../../components/Styled/Container";
import CardGrid from "../../components/CardGrid";
import data from "../../SampleData/data.json";
import data2 from "../../SampleData/data2.json";

const LandingPage: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <h1>My Container!</h1>
      </Container>
      <CardGrid data={data} />
      <CardGrid data={data2} />
    </React.Fragment>
  );
};

export default LandingPage;
