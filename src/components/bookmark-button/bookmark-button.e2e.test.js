import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";
import {BookmarkButton} from "./bookmark-button";

configure({adapter: new Adapter()});

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

it(`BookmarkButton should call onClick 1 time`, () => {
  const handleClick = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <BookmarkButton
            parentClassPrefix={`card`}
            handleClick={handleClick}
            updateOffer={() => {}}
            offer={offer}
            authorizationStatus={``}
          />
        </BrowserRouter>
      </Provider>
  );

  wrapper.find(`.button`).simulate(`click`, {preventDefault: () => {}});

  expect(handleClick).toHaveBeenCalledTimes(1);
});
