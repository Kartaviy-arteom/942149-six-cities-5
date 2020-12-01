import React from "react";
import renderer from "react-test-renderer";
import {SortingOptions} from "./sorting-options";

it(`SortingOptions component render correctly`, () => {
  const tree = renderer.create(
      <SortingOptions
        changeSortType={noop}
        onActiveChange={noop}
        isActive={true}
        sortType={``}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
