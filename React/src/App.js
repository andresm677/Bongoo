import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Banner from "./components/Banner"
import Section from './components/Section';
import Services from "./components/Services"
import ServiceFinished from './components/ServiceFinished';
import ServicePending from './components/ServicePending';
import NewService from './components/NewService';
import ServiceForm from './components/ServiceForm';
import {Route, Switch} from "react-router-dom"
import { useState } from 'react';
import BannerNewService from './components/BannerNewService';
import jwtDecode from "jwt-decode";
import Home from './components/Screens/Home';
import Login from './components/Login';
import Register from './components/Register';
import AutocompleteBar from './components/AutocompleteBar';

function App() {
  const setUser = () => {
    localStorage.setItem("jwt", "sdasd");
    window.location = "/home";
  }
  
  if(!localStorage.getItem("jwt")) {
    return <Switch>
      <Route path="/register" render={(props) => <Register setUser={setUser} {...props}/>}/>
      <Route path="/" render={(props) => <Login setUser={setUser} {...props}/>}/>
    </Switch>
  }
  else {
    const jwt = localStorage.getItem("jwt");
    const {type} = jwtDecode(jwt);
    if(type==="worker"){
      return (
        <>
        <Header/>
        <div className="content">
          <Switch>
            <Route path="/home" component={Home}/>
          </Switch>
        </div>
        </>
      );
      }
      return (
        <>
          <Header />
          <div className="content">
            <Switch>
              <Route path="/home" component={() => <BannerNewService/>}/>
            </Switch>
          </div>
        </>
      )
  }
  localStorage.setItem("user", "worker");
  const type = localStorage.getItem("user");
  
  
}

export default App;
