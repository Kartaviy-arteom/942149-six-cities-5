import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

class CitiesList extends PureComponent {
  constructor(props) {
    super(props);
    this.onCityClick = this.onCityClick.bind(this);
  }
  onCityClick(evt) {
    evt.preventDefault();
    this.props.changeCity(evt.currentTarget.dataset.city);
    this.props.getHoveredOfferId(null);
  }
  render() {
    const {activeCity, cities} = this.props;
    return (
      <ul className="locations__list tabs__list">
        {cities.map((el, index) => (
          <li className="locations__item" key={`${el}-${index}`}>
            <a className={`locations__item-link tabs__item ${el === activeCity ? `tabs__item--active` : ``}`} href="#" data-city={el} onClick={this.onCityClick}>
              <span>{el}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  cities: state.cities
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(newCity) {
    dispatch(ActionCreator.changeCity(newCity));
  },
  getHoveredOfferId(id) {
    dispatch(ActionCreator.getHoveredOfferId(id));
  },
});

CitiesList.propTypes = {
  changeCity: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  getHoveredOfferId: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
