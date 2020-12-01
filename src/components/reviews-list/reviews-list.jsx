import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item";


const MAX_REVIEWS_COUNT = 10;

const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews.slice(0, Math.min(reviews.length, MAX_REVIEWS_COUNT))
      .sort((a, b) => ((new Date(b.date)) - (new Date(a.date))))
      .map((el, index) =>
        <ReviewsItem review = {el} key={`${el}-${index}`}/>
      )}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        avatarPath: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        reviewText: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export {ReviewsList};
export default ReviewsList;
