import React, { useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Register from './pages/RegisterPage';
import Detail from './pages/DetailPage';
import Home from './pages/HomePage';
import UserProvider from './store/UserProvider';
import { getCurrentUser } from './services/network';

function App() {
  const [currentUser, setUser] = useState(null);
  const history = useHistory();

  history.listen((location, action) => {
    // means the cookie is set but not the currentUser
    if (!currentUser) {
      getCurrentUser().then(user => {
        setUser(user)
      })
    }
  });
  return (
    <UserProvider currentUser={currentUser} setUser={setUser}>
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
