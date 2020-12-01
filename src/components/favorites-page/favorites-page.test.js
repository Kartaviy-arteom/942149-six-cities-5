import React from "react";
import renderer from "react-test-renderer";
import FavoritesPage from "./favorites-page";

const noop = () => {};
const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
const offers = {
  offersCount: 2,
  Paris: [
    {
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
      maxGuestsCount: 1,
      offerId: 1,
      offerZoom: 1,
      owner: {
        avatarPath: `img/avatar.jpg`,
        isSuper: true,
        ownerId: 1,
        ownerName: `Boris`
      },
      photoPaths: [`https://`],
      previewImage: `https://`,
      ratingValue: 1,
      title: `Amazing...`,
      type: `apartment`,
    },
  ]
};

it(`Should FavoritesPage render correctly`, () => {
  const tree = renderer
    .create(<FavoritesPage
      offers={offers}
      cities={cities}
      loadFavoriteOffers={noop}
      deleteOffer={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
