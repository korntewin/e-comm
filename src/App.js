import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import HomePage from "./components/pages/homepage/homepage.component"
import ShopPage from "./components/pages/shoppage/shoppage.components"
import Header from "./components/header/header.components"

const JustAnotherPage = (props) => {
  return (
    <div>
      {console.log(props)}
      <Link to = '/'>Link path</Link>
      <button onClick={()=> props.history.push('/')}> Btn path</button>
      <h1>Another Page</h1>
    </div>
  )
}

function App() {
  return (

    <div className = "App">
      <Header />
      <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Route path='/shop' component = {ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
