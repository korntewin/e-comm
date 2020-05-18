import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import HomePage from "./components/pages/homepage/homepage.component"
import ShopPage from "./components/pages/shoppage/shoppage.components"
import Header from "./components/header/header.components"
import SigninPage from "./components/pages/signin-page/signin-page.components"

function App() {
  return (

    <div className = "App">
      <Header />
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route path='/shop' component = {ShopPage} />
        <Route path='/signin' component = {SigninPage} />
      </Switch>
    </div>
  );
}

export default App;
