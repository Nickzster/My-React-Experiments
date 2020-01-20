import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* components */
import Routes from './Routes/Routes';
import LandingPage from './screens/LandingPage';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
