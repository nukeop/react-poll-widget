import React from 'react'
import { Switch } from 'react-router';
import { CreateNewPollViewContainer } from './views/CreateNewPollView/CreateNewPollViewContainer';

function App() {
  return (
    <Switch>
      <CreateNewPollViewContainer />
    </Switch>
  );
}

export default App;
