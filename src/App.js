import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { TermsOfUsePage } from "./components/TermsOfUse/TermsOfUsePage.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <TermsOfUsePage />
          </Route>
          <Route path={`/:language`}>
            <TermsOfUsePage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
