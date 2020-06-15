import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './pages/RegisterPage';
import Detail from './pages/DetailPage';
import Home from './pages/HomePage';

function App() {
  return (
    <Switch>
      <Route exact path='/register' component={Register}/>
      {/* both /roster and /roster/:number begin with /roster */}
      <Route path='/' component={Home}/>
      <Route path='/detail' component={Detail}/>
    </Switch>
  );
}

export default App;
