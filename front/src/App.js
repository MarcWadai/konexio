import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Register from './pages/RegisterPage';
import Detail from './pages/DetailPage';
import Home from './pages/HomePage';
import UserProvider from './store/UserProvider';

function App() {
  return (
    <UserProvider>
      <Switch>
        <Route exact path='/register' component={Register} />
        {/* both /roster and /roster/:number begin with /roster */}
        <Route path='/home' component={Home} />
        <Route path='/user/:userId' component={Detail} />
        <Redirect exact to="/home" /> :
    </Switch>
    </UserProvider>
  );
}

export default App;
