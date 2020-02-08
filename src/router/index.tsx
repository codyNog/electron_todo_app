import React from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import RootPage from "../components/pages/root";

const Router: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={"/"}>
          <RootPage />
        </Route>
        <Route path={"/test"}>
          <Link to={"/"}>back</Link>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
