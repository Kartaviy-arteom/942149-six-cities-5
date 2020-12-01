import React from "react";
import renderer from "react-test-renderer";
import {SortingOptions} from "./sorting-options";

const noop = () => {};

it(`SortingOptions component render correctly`, () => {
  const tree = renderer.create(
      <SortingOptions
        changeSortType={noop}
        onActiveChange={noop}
        isActive={true}
        sortType={`Popular`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
