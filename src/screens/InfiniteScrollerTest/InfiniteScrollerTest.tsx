import React, { useEffect, useState } from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

/* components */
import { Container } from '../../components/Styled/Container';
import CardGrid from '../../components/CardGrid';
/* state */
import InfiniteScroller from '../../stores/InfiniteScroller';

const scroll = fromEvent(document, 'scroll');

const needMoreData = () => {
  if (
    window.innerHeight + document.documentElement.scrollTop >=
    document.documentElement.offsetHeight - 1000
  )
    return true;
  return false;
};

const InfiniteScrollerTest: React.FC = () => {
  const store = InfiniteScroller.useStore();
  const [scrollEventIsLoaded, loadScrollEvent] = useState(false);
  useEffect(() => {
    if (store.get('data').length === 0) store.set('loading')(true);
    if (!scrollEventIsLoaded) {
      scroll.pipe(debounceTime(200)).subscribe(() => {
        if (needMoreData()) {
          store.set('loading')(true);
        }
      });
      loadScrollEvent(true);
    }
  }, [store.get('loading')]);
  return (
    <React.Fragment>
      <Container>
        <h1>Infinite Scroller!</h1>
        <p>Keep Scrolling to load endless users!</p>
      </Container>
      <hr />
      <CardGrid data={store.get('data')} />
      {store.get('loading') === true ? (
        <h2 style={{ textAlign: 'center', margin: '5em 0em' }}>Loading...</h2>
      ) : null}
      <hr />
    </React.Fragment>
  );
};

export default InfiniteScroller.withStore(InfiniteScrollerTest);
