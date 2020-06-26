import React, {useState} from 'react';
import {Route, HashRouter } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Profile from "./routes/Profile";
import Navigation from "./components/Navigation";
import Signin from "./routes/Signin";
import Logout from "./routes/Logout";
import Login from "./routes/Login";
import AuthRoute from './components/AuthRoute';
import Detail from "./routes/Detail";

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const login = ({email, password}) => setUser(Signin({email, password}));
  const logout = () => setUser(null);
  console.log(authenticated)
  return (
    <HashRouter>
      <Navigation authenticated={authenticated}/>
      <Route exact path = "/" component={Home}/>
      <Route path = "/about" component={About}/>
      <Route path = "/profile" component={Profile}/>
      <Route path = "/movie/:id" component={Detail}/>
      <Route
        path = "/logout"
        render={props=>(
          <Logout logout={logout}
          {...props}/>
        )} 
      />
      <Route
        path = "/login"
        render = {props=>(
          <Login authenticated={authenticated} login={login}
          {...props} />
        )}
      />
      <AuthRoute
        authenticated={authenticated}
        path="./profile"
        render={props => <Profile user={user} {...props}/>}
      />
    </HashRouter>
  );
}

export default App;