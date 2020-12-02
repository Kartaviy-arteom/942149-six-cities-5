import React from "react";
import renderer from "react-test-renderer";
import {BookmarkButton as BookmarkButtonWithoutStore} from "./bookmark-button";

it(`Should BookmarkButton render correctly`, () => {
  const tree = renderer
    .create(<BookmarkButtonWithoutStore
      offer={{isFavorite: true, isPremium: true}}
      parentClassPrefix={`place-card`}
      handleClick={() => {}}
      updateOffer={() => {}}
      authorizationStatus={``}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

