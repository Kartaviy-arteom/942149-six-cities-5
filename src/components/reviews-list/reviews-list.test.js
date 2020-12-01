import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from "./reviews-list";

const reviews = [{}];

it(`ReviewsList component render correctly`, () => {
  const tree = renderer.create(
      <ReviewsList
        reviews={reviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
