import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* component imports */
import LandingPage from '../screens/LandingPage';
import TestScreen from '../screens/TestScreen';
import InfiniteScrollerTest from '../screens/InfiniteScrollerTest';
/* stores */
import TestStore from '../stores/TestStore';
import InfiniteScroller from '../stores/InfiniteScroller';
const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        <InfiniteScroller.Container>
          <Route
            exact
            path='/infinite-scroller'
            component={InfiniteScrollerTest}
          />
        </InfiniteScroller.Container>
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
