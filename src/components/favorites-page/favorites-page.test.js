import React from "react";
import renderer from "react-test-renderer";
import FavoritesPage from "./favorites-page";

const noop = () => {};
const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const offers = {
  offersCount: 2,
  Paris: [
    {},
    {},
  ]
};
const loadFavoriteOffers

it(`Should FavoritesPage render correctly`, () => {
  const tree = renderer
    .create(<FavoritesPage
      offers={offers}
      cities={cities}
  l   oadFavoriteOffers={noop}
      deleteOffer={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
