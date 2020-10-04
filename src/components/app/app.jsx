import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import LoginPage from "../login-page/login-page";
import FavoritesPage from "../favorites-page/favorites-page";
import PropertyPage from "../property-page/property-page";

const App = (props) => {
  const {placesFoundedCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" >
          <MainPage placesFoundedCount = {placesFoundedCount} />
        </Route>
        <Route exact path = "/login">
          <LoginPage />
        </Route>
        <Route exact path = "/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/offer/:id?" exact component={PropertyPage} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesFoundedCount: PropTypes.number.isRequired,
};

export default App;
