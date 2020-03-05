import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './component/NavBar';
import Home from './component/Home';
import Profile from './component/Profile';
import LogIn from './component/LogIn';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Switch>
      <Route exact path={"/"} component={Home}/>
      <Route path={"/profile"} component={Profile}/>
      <Route path={"/login"} component={LogIn}/>
      <Route component={Error} />
    </Switch>
    </div>
  );
}

export default App;
