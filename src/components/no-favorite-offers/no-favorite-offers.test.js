import React from "react";
import renderer from "react-test-renderer";
import {NoFavoriteOffers} from "./no-favorite-offers";

it(`NoFavoriteOffers component render correctly`, () => {
  const tree = renderer.create(
      <NoFavoriteOffers/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
