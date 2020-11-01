import React from "react";
import PropTypes from "prop-types";
import placeCardProp from "../place-card/place-card.prop";
import Header from "../header/header";
import CommentForm from "../comment-form/comment-form";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import PlacesList from "../places-list/places-list";
import {MAX_RATING_VALUE} from "../../consts";

const MAX_PHOTOS_COUNT = 6;

const PropertyPage = (props) => {
  const {offer, reviews, nearbyOffers} = props;
  const {isPremium, photoPaths, costValue, ratingValue, title, type, bedroomsCount, maxGuestsCount, owner, description, reviewIds, amenities} = offer;
  const {avatarPath, ownerName, isSuper} = owner;
  const ratingPercentValue = (Math.round(ratingValue) / MAX_RATING_VALUE) * 100;
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">

              {photoPaths.map((el, index) => (
                <div className="property__image-wrapper" key={`${el}-${index}`}>
                  <img className="property__image" src={`/${el}`} alt="Photo studio" />
                </div>
              )).slice(0, Math.min(photoPaths.length, MAX_PHOTOS_COUNT))}

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium && <div className="place-card__mark"><span>Premium</span></div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ratingPercentValue}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ratingValue}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomsCount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxGuestsCount} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{costValue}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {amenities.map((element, index) => (
                    <li key={`${element}-${index}`}className="property__inside-item">
                      {element}
                    </li>
                  )
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${isSuper ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={avatarPath} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {ownerName}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewIds.length}</span></h2>
                <ReviewsList reviewIds={reviewIds} reviews={reviews}/>
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offersCord={nearbyOffers.map((el) => el.cords)}/>
          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList offers={nearbyOffers} className={`near-places__list`} childClassName={`near-places__card`}/>
          </section>
        </div>
      </main>
    </div>
  );
};

PropertyPage.propTypes = {
  offer: PropTypes.shape(placeCardProp).isRequired,
  reviews: PropTypes.objectOf(
      PropTypes.shape({
        avatarPath: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        reviewText: PropTypes.string.isRequired,
      })
  ).isRequired,
  nearbyOffers: PropTypes.array,
};

export default PropertyPage;
