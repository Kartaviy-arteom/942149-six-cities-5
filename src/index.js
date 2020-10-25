import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

const PLACES_FOUNDED_COUNT = 3450;

const rootElement = document.querySelector(`#root`);

ReactDOM.render(
    <App
      placesFoundedCount = {PLACES_FOUNDED_COUNT}
      offers = {offers}
      reviews = {reviews}
    />,
    rootElement
);
