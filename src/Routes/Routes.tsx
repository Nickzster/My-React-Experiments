import React from 'react';
import { Route, Switch } from 'react-router-dom';
/* component imports */
import LandingPage from '../screens/LandingPage';
import TestScreen from '../screens/TestScreen';
/* stores */
import TestStore from '../stores/TestStore';
const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <Switch>
        <TestStore.Container>
          <Route exact path='/test' component={TestScreen} />
        </TestStore.Container>
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
