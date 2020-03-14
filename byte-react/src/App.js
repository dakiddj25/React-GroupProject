import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
// import NavBar from './component/NavBar';
// import Home from './component/Home';
// import Profile from './component/Profile';
import LogIn from './component/LogIn';
import SignUp from './component/SignUp';
import Mainpage from './component/Mainpage';



function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path={"/SignUp"} component={SignUp}/>
      <Route path={"/login"} component={LogIn}/>
      <Route exact path={"/login"} component={LogIn}/>
      {/* <Route component={Error} /> */}
      <Route component={Mainpage} />
    </Switch>
    </div>
  );
}

export default App;
