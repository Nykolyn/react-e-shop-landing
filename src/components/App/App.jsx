import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

const App = () => (
  <div>
    <Switch>
      <Redirect exact from="*" to="/" />
    </Switch>
  </div>
);

export default App;
