import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "../../store/reducers/root-reducer";
import {SortingOptions} from "./sorting-options";

configure({adapter: new Adapter()});

const store = createStore(reducer);

it(`SortingForm should call onActiveChange 1 time`, () => {
  const onActiveChange = jest.fn();
  const changeSortType = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SortingOptions
            onActiveChange={onActiveChange}
            changeSortType={changeSortType}
            sortType={`Popular`}
            isActive={false}
          />
        </BrowserRouter>
      </Provider>
  );

  wrapper.find(`.places__sorting`).simulate(`click`, {preventDefault: () => {}});

  expect(onActiveChange).toHaveBeenCalledTimes(1);
});

it(`SortingForm should call onActiveChange 1 time`, () => {
  const onActiveChange = jest.fn();
  const changeSortType = jest.fn();

  const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SortingOptions
            onActiveChange={onActiveChange}
            changeSortType={changeSortType}
            sortType={`Popular`}
            isActive={true}
          />
        </BrowserRouter>
      </Provider>
  );

  wrapper.find(`.places__option`).at(1).simulate(`click`, {preventDefault: () => {}});

  expect(changeSortType).toHaveBeenCalledTimes(1);
});


