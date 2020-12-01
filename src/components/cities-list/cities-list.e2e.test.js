import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import CitiesList from "./cities-list";
import {createStore} from "redux";
import {CITIES} from "../../consts";
import reducer from "../../store/reducers/root-reducer";

configure({adapter: new Adapter()});
const store = createStore(reducer);

it(`CitiesList should call changeCity and getHoveredOffer must call 1 time each`, () => {
  const changeCity = jest.fn();
  const getHoveredOffer = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <CitiesList
            city={`Paris`}
            changeCity={changeCity}
            getHoveredOffer={getHoveredOffer}
            cities={CITIES}
          />
        </BrowserRouter>
      </Provider>
  );

  wrapper.find(`.locations__item-link.tabs__item`).at(0).simulate(`click`);

  expect(changeCity).toHaveBeenCalledTimes(1);
});
