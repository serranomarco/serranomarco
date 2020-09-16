import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Context from './Context';
import Main from './Main';

function App() {
  const [x, setX] = useState(0)

  const context = {
    x,
    setX
  }
  return (
    <Context.Provider value={context}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;