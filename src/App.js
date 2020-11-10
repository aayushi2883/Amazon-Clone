import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import React from "react"


function App() {
  return (
<Router>
<div className="app">
  <Switch>
    <Route path="/checkout">
      <h1>checkout</h1>
    </Route>
    <Route path="/login">
    <h1>login PAGE</h1>
    </Route>
    <Route path="/">
      <h1>HOME PAGE!!!!</h1>
    </Route>
  </Switch>
</div>
</Router>  
);
}

export default App;
