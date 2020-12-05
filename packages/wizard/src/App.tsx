import React from 'react'
import { Switch } from 'react-router';
import { PageWithSidebar } from './layouts/PageWithSidebar';

function App() {
  return (
    <div>
      <Switch>
        <PageWithSidebar>
          content
  </PageWithSidebar>
      </Switch>
    </div>
  );
}

export default App;
