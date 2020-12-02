import React from "react";
import renderer from "react-test-renderer";
import PropertyPage from "./property-page";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import reducer from "../../store/reducers/root-reducer";
import {createStore} from "redux";

const store = createStore(reducer);

const noop = () => {};
const activeOffer = {
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
};
const comments = [{
  avatarPath: `https:`,
  commentId: 1,
  commentatorId: 11,
  date: `2020-10-10T13:38:44.753Z`,
  id: 1,
  isCommentatorPro: true,
  name: `Jack`,
  rating: 1,
  reviewText: `la la la`,
}];

const match = {
  params: {
    id: 1,
  }
};
const nearbyOffers = [
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
const authorizationStatus = `AUTH`;


it(`PropertyPage component render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <PropertyPage
            updateOffer={noop}
            redirectToRoute={noop}
            getNerbyOffers={noop}
            getOfferComments={noop}
            getOffer={noop}
            onItemActive={noop}
            activeElement={``}
            authorizationStatus={authorizationStatus}
            match={match}
            nearbyOffers={nearbyOffers}
            activeOffer={activeOffer}
            comments={comments}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
