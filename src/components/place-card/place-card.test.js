import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from "./place-card";

const noop = () => {};
const offer = {
  amenities: [`Air conditioning`, `Laptop friendly workspace`],
  bedroomsCount: 3,
  city: `Paris`,
  cityCords: [48.85661, 2.351499],
  cityZoom: 13,
  cords: [48.87961000000001, 2.353499],
  costValue: 332,
  description: `Template`,
  isFavorite: true,
  isPremium: false,
  maxGuestsCount: 2,
  offerId: 2,
  offerZoom: 2,
  owner: {
    avatarPath: `img/avatar.jpg`,
    isSuper: true,
    ownerId: 2,
    ownerName: `Boris`
  },
  photoPaths: [`https://`],
  previewImage: `https://`,
  ratingValue: 2,
  title: `Amazing...`,
  type: `apartment`,
};
const className = `new-card`;

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
