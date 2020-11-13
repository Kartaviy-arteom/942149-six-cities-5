import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {SortTypes} from "../../consts";
import {ActionCreator} from "../../store/action";
import {withActiveFlag} from "../../hocs/with-active-flag/with-active-flag";

const sortTypesList = [
  SortTypes.POPULAR,
  SortTypes.LOW_PRICE,
  SortTypes.HIGH_PRICE,
  SortTypes.TOP_RATED
];

const SortingOptions = (props) => {
  const onOptionClick = (evt) => {
    props.changeSortType(evt.target.textContent);
  };

  const {sortType, onActiveChange, isActive} = props;
  return (
    <form className="places__sorting" action="#" method="get" onClick={onActiveChange}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isActive ? (
        <ul className="places__options places__options--custom places__options--opened">
          {sortTypesList.map((el) => (
            <li className={`places__option ${sortType === el ? `places__option--active` : ``}`} tabIndex="0" onClick={onOptionClick} key={el}>{el}</li>
          ))}
        </ul>) : ``}
    </form>
  );
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
  activeOfferCords: state.activeOfferCords
});

const mapDispatchToProps = (dispatch) => ({
  changeSortType(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
});

SortingOptions.propTypes = {
  sortType: PropTypes.string.isRequired,
  changeSortType: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActiveChange: PropTypes.func.isRequired
};

export default withActiveFlag(connect(mapStateToProps, mapDispatchToProps)(SortingOptions));
