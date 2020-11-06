import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import App from "./components/app/app";
import reviews from "./mocks/reviews";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);
const PLACES_FOUNDED_COUNT = 3450;

const rootElement = document.querySelector(`#root`);

ReactDOM.render(
    <Provider store = {store}>
      <App
        placesFoundedCount = {PLACES_FOUNDED_COUNT}
        reviews = {reviews}
      />,
    </Provider>,
    rootElement
);
