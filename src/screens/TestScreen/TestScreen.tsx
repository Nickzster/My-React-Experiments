import React, { useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

/* components */
import { Container } from '../../components/Styled/Container';
import CardGrid from '../../components/Styled/CardGrid';
import Card from '../../components/Card';
import Splitter from '../../components/Splitter';
import { UserData } from '../../types/Interfaces';
import Spinner from '../../components/Spinner';
import data from '../../SampleData/data.json';
/* state */
import TestStore from '../../stores/TestStore';

const scroll = fromEvent(document, 'scroll');

const needMoreData = (containerHeight: number, currentHeight: number) => {
  if (containerHeight - 2000 < currentHeight) return true;
  return false;
};

const TestScreen: React.FC = () => {
  const store = TestStore.useStore();
  useEffect(() => {
    if (store.get('data').length === 0) store.set('loading')(true);
    scroll.pipe(debounceTime(200)).subscribe(() => {
      if (needMoreData(document.body.clientHeight, window.scrollY))
        store.set('loading')(true);
    });
  }, [store.get('loading')]);
  return (
    <React.Fragment>
      <Container>
        <h1>Test Screen!</h1>
      </Container>
      {/* <Splitter
        data={{
          title: 'Click The Button!',
          description: 'Click the Button to change your life!',
          image: 'https://wallpaperplay.com/walls/full/1/e/6/78925.jpg',
          cta: 'Click Me!'
        }}
      /> */}
      <hr />
      <CardGrid>
        {store.get('data').map(card => {
          return (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          );
        })}
      </CardGrid>
      {store.get('loading') === true ? (
        <h2 style={{ textAlign: 'center', margin: '5em 0em' }}>Loading...</h2>
      ) : null}
      <hr />
    </React.Fragment>
  );
};

export default TestStore.withStore(TestScreen);
