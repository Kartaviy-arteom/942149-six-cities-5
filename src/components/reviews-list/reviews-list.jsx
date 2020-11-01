import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item";


const MAX_REVIEWS_COUNT = 10;

class ReviewsList extends PureComponent {

  render() {
    const {reviewIds, reviews} = this.props;
    return (
      <ul className="reviews__list">
        {reviewIds.slice(0, Math.min(reviewIds.length, MAX_REVIEWS_COUNT)).map((el, index) =>
          <ReviewsItem review = {reviews[el]} key={`${el}-${index}`}/>
        )}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  reviewIds: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  reviews: PropTypes.objectOf(
      PropTypes.shape({
        avatarPath: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        reviewText: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export default ReviewsList;
