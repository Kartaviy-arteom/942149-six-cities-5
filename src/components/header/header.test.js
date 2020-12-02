import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import reducer from "../../store/reducers/root-reducer";
import {createStore} from "redux";

const store = createStore(reducer);

const userInfo = {
  id: 1,
  email: `test@test.com`,
  name: `john`,
  avatarUrl: `img.jpg`,
};
const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};


it(`Should Header render correctly when user is authorized `, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Header
              authorizationStatus={AuthorizationStatus.AUTH}
              userInfo={userInfo}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should Header render correctly when user is not authorized `, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Header
              authorizationStatus={AuthorizationStatus.NO_AUTH}
              userInfo={userInfo}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
