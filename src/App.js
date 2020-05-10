import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./components/pages/homepage/homepage.component"

const JustAnotherPage = () => {
  return (
    <h1>Another Page</h1>
  )
}

function App() {
  return (

    <div className = "App">
      <Switch>
        <Route path = '/' component = {HomePage} />
        <Route path='/another' component = {JustAnotherPage} />
      </Switch>
    </div>
  );
}

export default App;
