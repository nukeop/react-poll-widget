import React from 'react'
import { Switch } from 'react-router';
import { CreateNewPollView } from './views/CreateNewPollView';

function App() {
  return (
    <Switch>
      <CreateNewPollView />
    </Switch>
  );
}

export default App;
