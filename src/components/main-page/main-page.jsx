import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PlacesList from "../places-list/places-list";
import Header from "../header/header";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import SortingOptions from "../sorting-options/sorting-options";
import NoData from "../no-data/no-data";

const MainPage = ({offers, activeCity}) => {
  const validOffers = offers.filter((el) => el.city === activeCity);

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
                <PlacesList offers={validOffers} className={`cities__places-list tabs__content`} childClassName={`cities__place-card`}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map validOffers={validOffers}/>
                </section>
              </div>
            </div>) : <NoData activeCity = {activeCity}/>}
        </div>
      </main>
    </div>
  );
};


MainPage.propTypes = {
  placesFoundedCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: state.APLICATION_PROCESS.activeCity,
});

export default connect(mapStateToProps)(MainPage);
