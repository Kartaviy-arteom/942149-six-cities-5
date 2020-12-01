import React from "react";
import renderer from "react-test-renderer";
import {LoginPage} from "./login-page";

const noop = () => {};
const activeCity = `Paris`;
const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

it(`LoginPage component render correctly`, () => {
  const tree = renderer.create(
      <LoginPage
        onSubmit={noop}
        activeCity={activeCity}
        authorizationStatus={AuthorizationStatus.NO_AUTH}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
