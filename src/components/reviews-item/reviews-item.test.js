import React from "react";
import renderer from "react-test-renderer";
import {ReviewsItem} from "./reviews-item";

const noop = () => {};

const review = {
  avatarPath: PropTypes.string.isRequired,
  name: `John`,
  rating: 4,
  date: 
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
