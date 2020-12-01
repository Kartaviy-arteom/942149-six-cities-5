import React from "react";
import renderer from "react-test-renderer";
import {ReviewsItem} from "./reviews-item";

const review = {
  avatarPath: `img.jpg`,
  name: `John`,
  rating: 4,
  date: `2020-10-10T13:38:44.753Z`,
  reviewText: `very good`,
};

it(`ReviewsItem component render correctly`, () => {
  const tree = renderer.create(
      <ReviewsItem
        review={review}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
