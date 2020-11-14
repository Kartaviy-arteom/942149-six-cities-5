import React from "react";
import PropTypes from "prop-types";
import PlaceCardProp from "./place-card.prop";
import {Link} from "react-router-dom";
import {MAX_RATING_VALUE} from "../../consts";

const PlaceCard = ({onHover, offer, className}) => {

  const {isPremium, photoPaths, costValue, ratingValue, title, type} = offer;
  const ratingPercentValue = (Math.round(ratingValue) / MAX_RATING_VALUE) * 100;
  return (
    <article className={`${className} place-card`}
      onMouseEnter={() => {
        onHover(offer);
      }}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/offer">
          <div>
            <img className="place-card__image" src={photoPaths[0]} width="260" height="200" alt="Place image"/>
          </div>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{costValue}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingPercentValue}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/offer">
            <span>{title}</span>
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};


PlaceCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: PlaceCardProp,
  className: PropTypes.string
};

export default PlaceCard;
