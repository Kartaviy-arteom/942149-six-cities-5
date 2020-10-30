import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import LoginPage from "../login-page/login-page";
import FavoritesPage from "../favorites-page/favorites-page";
import PropertyPage from "../property-page/property-page";

const App = (props) => {
  const {placesFoundedCount, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/login">
          <LoginPage />
        </Route>
        <Route exact path = "/favorites">
          <FavoritesPage offers = {offers}/>
        </Route>
        <Route path="/offer/:id?" exact >
          <PropertyPage offer = {offers[0]} reviews = {reviews} />
        </Route>
        <Route>
          <MainPage placesFoundedCount = {placesFoundedCount} offers = {offers} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesFoundedCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.object.isRequired,
};

export default App;
