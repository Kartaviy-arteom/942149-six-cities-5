import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PlacesList from "../places-list/places-list";
import Header from "../header/header";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import SortingOptions from "../sorting-options/sorting-options";
import {changeOfferStatus} from "../../store/api-actions";
import NoData from "../no-data/no-data";
import {ActionCreator} from "../../store/action";
import {AuthorizationStatus} from "../../consts";

const MainPage = ({offers, activeCity, getHoveredOffer, activeOffer, authorizationStatus, updateOffer, redirectToRoute}) => {
  const validOffers = offers.filter((el) => el.city === activeCity);
  const onHoverHaandle = (currentCard) => {
    getHoveredOffer(currentCard);
  };

  const changeFavoriteOfferStatus = (offer) => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      updateOffer(offer.offerId, Number(!offer.isFavorite));
    } else {
      redirectToRoute(`/login`);
    }
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${validOffers.length === 0 ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList activeCity = {activeCity} />
          </section>
        </div>
        <div className="cities">
          {validOffers.length !== 0 ?
            (<div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{validOffers.length} places to stay in {activeCity}</b>
                <SortingOptions />
                <PlacesList offers={validOffers} className={`cities__places-list tabs__content`} childClassName={`cities__place-card`} onHover={onHoverHaandle} placeCardBookmarkHandler={changeFavoriteOfferStatus}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map validOffers={validOffers} activeOffer={activeOffer}/>
                </section>
              </div>
            </div>) : <NoData activeCity = {activeCity}/>}
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
  getHoveredOffer: PropTypes.func.isRequired,
  activeOffer: PropTypes.object,
  authorizationStatus: PropTypes.string.isRequired,
  updateOffer: PropTypes.func.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  getHoveredOffer: (offer) => dispatch(ActionCreator.getHoveredOffer(offer)),
  updateOffer(hotelId, status) {
    dispatch(changeOfferStatus(hotelId, status));
  },
  redirectToRoute(url) {
    dispatch(ActionCreator.redirectToRoute(url));
  }
});

const mapStateToProps = (state) => ({
  activeCity: state.APLICATION_PROCESS.activeCity,
  activeOffer: state.APLICATION_PROCESS.activeOffer,
  authorizationStatus: state.USER.authorizationStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
