
import React from "react";
import renderer from "react-test-renderer";
import {MainPage} from "./main-page";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import reducer from "../../store/reducers/root-reducer";
import {createStore} from "redux";

const store = createStore(reducer);

const noop = () => {};
const offers = [
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
  },
];
const activeCity = `Paris`;
const activeOffer = offers[0];
const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};


it(`MainPage component render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage
            getHoveredOffer={noop}
            onSubmit={noop}
            updateOffer={noop}
            redirectToRoute={noop}
            authorizationStatus={AuthorizationStatus.AUTH}
            offers={offers}
            activeCity={activeCity}
            activeOffer={activeOffer}/>
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
