import React from "react";
import MainPage from "../main-page/main-page";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import PrivateRoute from "../private-route/private-route";
import LoginPage from "../login-page/login-page";
import FavoritesPage from "../favorites-page/favorites-page";
import PropertyPage from "../property-page/property-page";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path = "/login">
          <LoginPage />
        </Route>
        <PrivateRoute exact path = "/favorites" render={() => {
          return (
            <FavoritesPage/>
          );
        }}/>
        <Route path="/offer/:id?" exact component={PropertyPage}></Route>
        <Route>
          <MainPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
