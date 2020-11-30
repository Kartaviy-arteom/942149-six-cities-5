import React from "react";
import PropTypes from "prop-types";
import PlaceCardProp from "./place-card.prop";
import {Link} from "react-router-dom";
import {MAX_RATING_VALUE} from "../../consts";
import BookmarkButton from "../bookmark-button/bookmark-button";

const PlaceCard = ({onHover, offer, className, placeCardBookmarkHandler}) => {

  const {isPremium, previewImage, costValue, ratingValue, title, type, offerId} = offer;
  const ratingPercentValue = (Math.round(ratingValue) / MAX_RATING_VALUE) * 100;
  return (
    <article className={`${className}__card ${className}__place-card place-card`}
      onMouseEnter={onHover ? () => {
        onHover(offer);
      } : undefined
      }
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${offerId}`}>
          <div>
            <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
          </div>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{costValue}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton offer={offer} parentClassPrefix={`place-card`} handleClick={() => placeCardBookmarkHandler(offer)}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingPercentValue}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offerId}`}>
            <span>{title}</span>
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};


PlaceCard.propTypes = {
  onHover: PropTypes.func,
  offer: PlaceCardProp,
  className: PropTypes.string,
  placeCardBookmarkHandler: PropTypes.func.isRequired
};

export default PlaceCard;
