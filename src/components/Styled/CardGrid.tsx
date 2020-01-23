import styled from 'styled-components';

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  text-align: center;
  color: #000;
  align-content: center;
  justify-content: center;
  margin: 1em 1em;

  @media only screen and (min-width: 600px) {
    /*grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));*/
    margin: 1em 10em;
  }
`;

export default CardGrid;
