import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFavoriteOffers, deleteOffer} from "../../store/api-actions";
import Header from "../header/header";
import NoFavoriteOffers from "../no-favorite-offers/no-favorite-offers";
import PlacesList from "../places-list/places-list";
import {Link} from "react-router-dom";


class FavoritesPage extends PureComponent {
  constructor(props) {
    super(props);
    this._cities = this.props.cities;
    this._changeFavoriteOfferStatus = this._changeFavoriteOfferStatus.bind(this);
  }

  componentDidMount() {
    this.props.loadFavoriteOffers(this._cities);
  }

  _changeFavoriteOfferStatus(offer) {
    this.props.deleteOffer(offer.offerId, Number(!offer.isFavorite));
  }

  render() {
    const {offers} = this.props;
    if (!offers) {
      return (
        <div className="loading">Loading ...</div>
      );
    }

    return (
      <div className={`page page__main--favorites ${offers.offersCount === 0 ? `page--favorites-empty` : ``}`}>
        <Header />
        {offers.offersCount !== 0 ?
          (
            <main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">

                    {this.props.cities.map((city, index) => (
                      offers[city].length === 0 ? `` : (
                        <li className="favorites__locations-items" key = {`${city}-${index}`}>
                          <div className="favorites__locations locations locations--current">
                            <div className="locations__item">
                              <a className="locations__item-link" href="#">
                                <span>{city}</span>
                              </a>
                            </div>
                          </div>
                          <PlacesList offers={this.props.offers[city]} className={`favorites__places`} childClassName={`favorites`} placeCardBookmarkHandler={this._changeFavoriteOfferStatus}/>
                        </li>
                      )
                    ))}

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
  }
}

FavoritesPage.propTypes = {
  offers: PropTypes.object,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadFavoriteOffers: PropTypes.func.isRequired,
  deleteOffer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.DATA.favoriteOffers,
  cities: state.APLICATION_PROCESS.cities
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  },
  deleteOffer(hotelId, status) {
    dispatch(deleteOffer(hotelId, status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
