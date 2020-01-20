import React from 'react';
import { SplitterData } from '../../types/Interfaces';
import styled from 'styled-components';

const SplitterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
  }
`;

const SplitterRight = styled.div`
  display: none;
  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    z-index: 0;
    width: 100%;
    width: 70%;
  }
`;

const SplitterLeft = styled.div`
  background: #03a2ff;
  color: white;
  align-items: center;
  text-align: center;
  padding: 3.5rem 2rem;
  @media only screen and (min-width: 1200px) {
    clip-path: polygon(0 0, 150% 0, 100 100%, 0 100%);
    z-index: 10;

    width: 30%;
    & > h2 {
      font-size: 3rem;
    }
    & > p {
      font-size: 1.5rem;
    }
  }
  @media only screen and (min-width: 1400px) {
    clip-path: polygon(0 0, 150% 0, 100 100%, 0 100%);
    z-index: 10;

    width: 30%;
    & > h2 {
      font-size: 5rem;
    }
    & > p {
      font-size: 2rem;
    }
  }
`;

const Button = styled.a`
  padding: 1rem;
  margin: 1rem;
  background-color: #36b807;
  box-shadow: 1px 2.5px 5px 0px black;
  color: white;
  &:hover {
    cursor: pointer;
  }
  font-size: 2rem;
  font-weight: bold;
`;

const SplitterImg = styled.img`
  width: 100%;
  height: auto;
`;

interface Props {
  data: SplitterData;
}

const Splitter: React.FC<Props> = props => {
  const { cta, description, image, title } = props.data;
  return (
    <React.Fragment>
      <SplitterContainer>
        <SplitterLeft>
          <h2>{title}</h2>
          <p>{description}</p>
          <br />
          <Button>{cta}</Button>
        </SplitterLeft>
        <SplitterRight>
          <SplitterImg src={image} />
        </SplitterRight>
      </SplitterContainer>
    </React.Fragment>
  );
};

export default Splitter;
