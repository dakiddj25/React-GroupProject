import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';

const Mainpage = () => {
  return (
    <div className="Mainpage">
    <NavBar/>
    <Switch>
      <Route exact path={"/"} component={Home}/>
      <Route path={"/profile"} component={Profile}/>
      <Route component={Error} />
    </Switch>
    </div>
  );
}

export default Mainpage;