import React from 'react'
import { Redirect, Route, Switch } from 'react-router';

import { CreateNewPollViewContainer } from './views/CreateNewPollView/CreateNewPollViewContainer';
import { PollGeneralSettingsViewContainer } from './views/PollGeneralSettingsView/PollGeneralSettingsViewContainer';

function App() {

  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/create-new-poll' />
      </Route>
      <Route path='/create-new-poll'>
        <CreateNewPollViewContainer />
      </Route>
      <Route path='/poll/:id'>
        <PollGeneralSettingsViewContainer />
      </Route>
    </Switch>
  );
}

export default App;
