import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {connect} from "react-redux";
import PrivateRoute from "../private-route/private-route";
import LoginPage from "../login-page/login-page";
import FavoritesPage from "../favorites-page/favorites-page";
import PropertyPage from "../property-page/property-page";

const App = (props) => {
  const {placesFoundedCount, offers} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path = "/login">
          <LoginPage />
        </Route>
        <PrivateRoute exact path = "/favorites" render={() => {
          return (
            <FavoritesPage offers = {offers}/>
          );
        }}/>
        <Route path="/offer/:id?" exact component={PropertyPage}></Route>
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

const mapStateToProps = (state) => ({
  offers: state.DATA.offers,
});

export default connect(mapStateToProps)(App);
