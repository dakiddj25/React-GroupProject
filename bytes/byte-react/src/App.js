import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './component/NavBar';
import Home from './component/Home';
import Profile from './component/Profile';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp'



function App() {
  return (
    <div className="App">
    <NavBar/>
    <Switch>
      <Route exact path={"/SignUp"} component={SignUp}/>
<<<<<<< HEAD
=======
      <Route path={"/login"} component={LogIn}/>
>>>>>>> 95e376af6aceed2a9a2ea4a47dd5fdd3275467d1
      <Route exact path={"/"} component={Home}/>
      <Route path={"/profile"} component={Profile}/>
      <Route exact path={"/login"} component={LogIn}/>
      <Route component={Error} />
    </Switch>
    </div>
  );
}

export default App;
