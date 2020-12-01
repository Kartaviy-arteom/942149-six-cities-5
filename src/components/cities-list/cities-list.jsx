import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CitiesList = ({changeCity, getHoveredOffer, activeCity, cities}) => {
  const onCityClick = (evt) => {
    evt.preventDefault();
    changeCity(evt.currentTarget.dataset.city);
    getHoveredOffer(null);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((el, index) => (
        <li className="locations__item" key={`${el}-${index}`}>
          <a className={`locations__item-link tabs__item ${el === activeCity ? `tabs__item--active` : ``}`} href="#" data-city={el} onClick={onCityClick}>
            <span>{el}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  activeCity: state.APLICATION_PROCESS.activeCity,
  cities: state.APLICATION_PROCESS.cities
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (newCity) => dispatch(ActionCreator.changeCity(newCity)),
  getHoveredOffer: (offer) => dispatch(ActionCreator.getHoveredOffer(offer))
});

CitiesList.propTypes = {
  changeCity: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  getHoveredOffer: PropTypes.func.isRequired,
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
