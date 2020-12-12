import React from 'react'
import { Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router';

import { CreateNewPollViewContainer } from './views/CreateNewPollView/CreateNewPollViewContainer';

function App() {

  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/create-new-poll' />
      </Route>
      <Route path='/create-new-poll'>
        <CreateNewPollViewContainer />
      </Route>
    </Switch>
  );
}

export default App;
