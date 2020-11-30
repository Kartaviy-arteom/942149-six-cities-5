import React from "react";
import PropTypes from "prop-types";
import PlaceCardProp from "../place-card/place-card.prop";
import Header from "../header/header";
import NoFavoriteOffers from "../no-favorite-offers/no-favorite-offers";
import {Link} from "react-router-dom";
import {MAX_RATING_VALUE} from "../../consts";


const FavoritesPage = (props) => {
  const {offers} = props;
  const firstOffer = offers[0];
  const {photoPaths, costValue, ratingValue, title, type} = firstOffer;
  const ratingPercentValue = (Math.round(ratingValue) / MAX_RATING_VALUE) * 100;

  return (
    <div className={`page page__main--favorites ${offers.length === 0 ? `page__main--favorites-empty` : ``}`}>
      <Header />
      {offers.length === 0 ?
        (<main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>Amsterdam</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <article className="favorites__card place-card">
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <Link to="/offer">
                          <div>
                            <img className="place-card__image" src={photoPaths[0]} width="150" height="110" alt="Place image" />
                          </div>
                        </Link>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">&euro;{costValue} </b>
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

                  </div>
                </li>

              </ul>
            </section>
          </div>
        </main>) : <NoFavoriteOffers/>}
      
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(PlaceCardProp).isRequired,
};

export default FavoritesPage;
