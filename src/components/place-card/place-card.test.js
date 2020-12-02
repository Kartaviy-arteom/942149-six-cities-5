import React from "react";
import renderer from "react-test-renderer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {PlaceCard} from "./place-card";
import reducer from "../../store/reducers/root-reducer";

const noop = () => {};
const store = createStore(reducer);
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
      <Provider store={store}>
        <BrowserRouter>
          <PlaceCard
            onHove={noop}
            placeCardBookmarkHandler={noop}
            offer={offer}
            className={className}/>
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
