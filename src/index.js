import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import App from "./components/app/app";
import reviews from "./mocks/reviews";
import {fetchOffersList} from "./store/api-actions";

const PLACES_FOUNDED_COUNT = 3450;

const rootElement = document.querySelector(`#root`);

const api = createAPI(() => {});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchOffersList())
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
