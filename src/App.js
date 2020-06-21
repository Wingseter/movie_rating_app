import React from 'react';
import { Route, HashRouter } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Navigation from "./components/Navigation"

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route exact path = "/" component={Home}/>
      <Route path = "/about" component={About}/>
    </HashRouter>
  );
}

export default App;