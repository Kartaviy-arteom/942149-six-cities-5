import React from "react";
import renderer from "react-test-renderer";
import PropertyPage from "./auth-screen";

const noop = () => {};
const activeOffer = {};
const comments = [];
const match = {};
const nearbyOffers = [];
const authorizationStatus = ;


it(`PropertyPage component render correctly`, () => {
  const tree = renderer.create(
      <PropertyPage
        updateOffer={noop}
        redirectToRoute={noop}
        getNerbyOffers={noop}
        getOfferComments={noop}
        getOffer={noop}
        onItemActive={noop}
        activeElement={``}
        authorizationStatus={authorizationStatus}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
