import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from "./place-card";

const noop = () => {};
const offer = {};
const className = ``;

it(`PlaceCard component render correctly`, () => {
  const tree = renderer.create(
      <PlaceCard
        onHove={noop}
        placeCardBookmarkHandler={noop}
        offer={offer}
        className={className}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
