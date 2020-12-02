
import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import reducer from "../../store/reducers/root-reducer";
import {createStore} from "redux";

const store = createStore(reducer);

it(`MainPage component render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage/>
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
