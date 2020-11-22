import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {redirect} from "./store/middlewares/redirect";
import {createAPI} from "./services/api";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers/root-reducer";
import App from "./components/app/app";
import reviews from "./mocks/reviews";
import {fetchOffersList, checkAuth} from "./store/api-actions";

const PLACES_FOUNDED_COUNT = 3450;

const rootElement = document.querySelector(`#root`);

const api = createAPI(() => {});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

Promise.all([
  store.dispatch(fetchOffersList()),
  store.dispatch(checkAuth())
]).then(() => {

  ReactDOM.render(
      <Provider store = {store}>
        <App
          placesFoundedCount = {PLACES_FOUNDED_COUNT}
          reviews = {reviews}
        />,
      </Provider>,
      rootElement
  );
});
