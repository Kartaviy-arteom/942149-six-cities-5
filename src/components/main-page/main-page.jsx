import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PlacesList from "../places-list/places-list";
import Header from "../header/header";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";

class MainPage extends PureComponent {
  render() {
    const {offers, activeCity} = this.props;
    const validOffers = offers.filter((el) => el.city === activeCity);

    return (
      <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList activeCity = {activeCity} />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{validOffers.length} places to stay in {activeCity}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                  {/* не знаю пока что это, в markup закоментировано<!--
                  <select className="places__sorting-type" id="places-sorting">
                    <option className="places__option" value="popular" selected="">Popular</option>
                    <option className="places__option" value="to-high">Price: low to high</option>
                    <option className="places__option" value="to-low">Price: high to low</option>
                    <option className="places__option" value="top-rated">Top rated first</option>
                  </select>
                  --> */}
                </form>
                <PlacesList offers={validOffers} className={`cities__places-list tabs__content`} childClassName={`cities__place-card`}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offersCord={validOffers.map((el) => el.cords)} activeCity={activeCity}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  placesFoundedCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

export default connect(mapStateToProps)(MainPage);
