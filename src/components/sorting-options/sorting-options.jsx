import React, {PureComponent} from "react";
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

class SortingOptions extends PureComponent {
  constructor(props) {
    super(props);
    this.onOptionClick = this.onOptionClick.bind(this);
  }

  onOptionClick(evt) {
    this.props.changeSortType(evt.target.textContent);
  }

  render() {
    const {sortType, onActiveChange, isActive} = this.props;
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
              <li className={`places__option ${sortType === el ? `places__option--active` : ``}`} tabIndex="0" onClick={this.onOptionClick} key={el}>{el}</li>
            ))}
          </ul>) : ``}
      </form>
    );
  }
}

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
