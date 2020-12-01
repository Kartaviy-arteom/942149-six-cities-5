import React from "react";
import renderer from "react-test-renderer";
import {PlacesList} from "./auth-screen";

const noop = () => {};
const offers = [];
const className = ``;
const childClassName = ``;
const sortType = ``;


it(`PlacesList component render correctly`, () => {
  const tree = renderer.create(
      <PlacesList
        onItemActive={noop}
        placeCardBookmarkHandler={noop}
        onHover={noop}
        offers={offers}
        className={className}
        childClassName={childClassName}
        sortType={sortType}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
