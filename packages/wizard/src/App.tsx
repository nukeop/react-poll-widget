import React from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router';

import { CreateNewPollViewContainer } from './views/CreateNewPollView/CreateNewPollViewContainer';

function App() {

  console.log(useHistory())
  return (
    <Switch>
      <Route path='/'>
        <Redirect to='/create-new-poll' />
      </Route>
      <Route path='/create-new-poll'>
        <div>test</div>
        <CreateNewPollViewContainer />
      </Route>
    </Switch>
  );
}

export default App;
