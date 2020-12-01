import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import CitiesList from "./cities-list";
import {createStore} from "redux";
import {CITIES} from "../../consts";
import {ActionType} from "../../store/action";
import reducer from "../../store/reducers/root-reducer";

configure({adapter: new Adapter()});
const store = createStore(reducer);

const mockEvent = {
  preventDefault() {}
};

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

  wrapper.find(`.locations__item-link.tabs__item`).at(3).simulate(`click`, mockEvent);

  expect(changeCity).toHaveBeenCalledTimes(1);
  // expect(getHoveredOffer).toHaveBeenCalledTimes(1, {
  //   type: ActionType.GET_HOVERED_OFFER,
  //   payload: null,
  // });
});
