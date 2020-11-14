import React from "react";
import PropTypes from "prop-types";
import {MAX_RATING_VALUE} from "../../consts";

const ReviewsItem = (props) => {
  const {avatarPath: reviewAvatarPath, name, rating: reviewRating, reviewText, date} = props.review;
  const reviewRatingPercentValue = (Math.round(reviewRating) / MAX_RATING_VALUE) * 100;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={reviewAvatarPath} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${reviewRatingPercentValue}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewText}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
      </div>
    </li>
  );
};


ReviewsItem.propTypes = {
  review:
      PropTypes.shape({
        avatarPath: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        reviewText: PropTypes.string.isRequired,
      }).isRequired,
};

export default ReviewsItem;
