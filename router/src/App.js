import React from 'react';
import Home from "./home";
import Contact from "./contact";
import Profil from "./profil";
import Error from "./error";
import Menu from "./menu";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Menu/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/contact" component={Contact}/>
        <Route path="/profil" component={Profil}/>
        <Route component={Error}/>
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
