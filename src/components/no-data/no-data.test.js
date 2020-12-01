import React from "react";
import renderer from "react-test-renderer";
import {NoData} from "./no-data";

it(`NoData component render correctly`, () => {
  const tree = renderer.create(
      <NoData
        activeCity={`Paris`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
