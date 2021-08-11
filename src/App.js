import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AppPage from "./pages/AppPage";
import TestPage from "./pages/TestingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/app" exact component={AppPage} />
        <Route path="/test" exact component={TestPage} />
      </Switch>
    </Router>
  );
}

export default App;
