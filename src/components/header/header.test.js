import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";

const userInfo = {
  id: `1`,
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
        <Header
          authorizationStatus={AuthorizationStatus.AUTH}
          userInfo={userInfo}
        />

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should Header render correctly when user is not authorized `, () => {
  const tree = renderer
    .create(
        <Header
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          userInfo={userInfo}
        />

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
