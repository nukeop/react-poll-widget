import React from 'react'
import { Redirect, Route, Switch } from 'react-router';

import { CreateNewPollViewContainer } from './views/CreateNewPollView/CreateNewPollViewContainer';
import { PollGeneralSettingsViewContainer } from './views/PollGeneralSettingsView/PollGeneralSettingsViewContainer';
import { PollsDashboardViewContainer } from './views/PollsDashboardView/PollsDashboardViewContainer';

function App() {

  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/polls' />
      </Route>
      <Route path='/create-new-poll'>
        <CreateNewPollViewContainer />
      </Route>
      <Route exact path='/polls'>
        <PollsDashboardViewContainer />
      </Route>
      <Route path='/poll/:id'>
        <PollGeneralSettingsViewContainer />
      </Route>
      
    </Switch>
  );
}

export default App;
