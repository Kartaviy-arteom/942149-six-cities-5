import React from "react";
import renderer from "react-test-renderer";
import {LoginPage} from "./login-page";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import reducer from "../../store/reducers/root-reducer";

const noop = () => {};
const store = createStore(reducer);

const activeCity = `Paris`;
const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

it(`LoginPage component render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage
            onSubmit={noop}
            activeCity={activeCity}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
