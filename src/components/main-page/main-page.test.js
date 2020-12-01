
import React from "react";
import renderer from "react-test-renderer";
import {MainPage} from "./main-page";

const noop = () => {};
const offers = [],
const activeCity = `Paris`,
const activeOffer = offers[0],
const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};


it(`MainPage component render correctly`, () => {
  const tree = renderer.create(
      <MainPage
        getHoveredOffer={noop}
        onSubmit={noop}
        updateOffer={noop}
        redirectToRoute={noop}
        authorizationStatus={AuthorizationStatus.AUTH}
        offers={offers}
        activeCity={activeCity}
        activeOffer={activeOffer}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
