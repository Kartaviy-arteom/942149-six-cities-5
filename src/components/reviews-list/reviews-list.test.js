import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from "./reviews-list";

const reviews = [{
  avatarPath: `img.jpg`,
  name: `John`,
  rating: 4,
  date: `2020-10-10T13:38:44.753Z`,
  reviewText: `very good`,
}];

it(`ReviewsList component render correctly`, () => {
  const tree = renderer.create(
      <ReviewsList
        reviews={reviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
