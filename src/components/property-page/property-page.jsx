import React from "react";
import PropTypes from "prop-types";
import placeCardProp from "../place-card/place-card.prop";
import Header from "../header/header";
import CommentForm from "../comment-form/comment-form";
import {MAX_RATING_VALUE} from "../../consts";

const MAX_PHOTOS_COUNT = 6;
const MAX_REVIEWS_COUNT = 10;

const PropertyPage = (props) => {
  const {offer, reviews} = props;
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
                <ul className="reviews__list">
                  {reviewIds.map((el, index) => {
                    const {avatarPath: reviewAvatarPath, name, rating: reviewRating, reviewText, date} = reviews[el];
                    const reviewRatingPercentValue = (Math.round(reviewRating) / MAX_RATING_VALUE) * 100;
                    return (
                      <li key={`${el}-${index}`} className="reviews__item">
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
                  }).slice(0, Math.min(photoPaths.length, MAX_REVIEWS_COUNT))}
                </ul>
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="/img/room.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;80</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: `80%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Wood and stone place</a>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="/img/apartment-02.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;132</b>
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
                      <span style={{width: `80%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Canal View Prinsengracht</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src="/img/apartment-03.jpg" width="260" height="200" alt="Place image" />
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;180</b>
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
                      <span style={{width: `100%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <a href="#">Nice, cozy, warm big bed apartment</a>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
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
};

export default PropertyPage;
