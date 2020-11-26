import React from "react";
import PropTypes from "prop-types";
import {createSelector} from "reselect";
import PlaceCard from "../place-card/place-card";
import {connect} from "react-redux";
import {SortTypes} from "../../consts";
import {withActiveItem} from "../../hocs/with-active-item/with-active-item";

const PlacesList = ({offers, className, childClassName, sortType, onHover, placeCardBookmarkHandler}) => {

  let sortedOffers = offers.slice();

  const getSortType = () => sortType;

  const sortSelector = createSelector(
      getSortType,
      () => {
        switch (sortType) {
          case SortTypes.POPULAR:
            sortedOffers = offers.slice();
            break;
          case SortTypes.LOW_PRICE:
            sortedOffers.sort((a, b) => a.costValue - b.costValue);
            break;
          case SortTypes.HIGH_PRICE:
            sortedOffers.sort((a, b) => b.costValue - a.costValue);
            break;
          case SortTypes.TOP_RATED:
            sortedOffers.sort((a, b) => b.ratingValue - a.ratingValue);
            break;
        }
      });
  sortSelector();

  return (
    <div className={`${className} places__list`}>
      {sortedOffers.map((el, index) => (
        <PlaceCard className={childClassName} offer = {el} onHover = {onHover} placeCardBookmarkHandler={placeCardBookmarkHandler} key = {`${el.title}-${index}`}/>
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  className: PropTypes.string,
  childClassName: PropTypes.string,
  sortType: PropTypes.string.isRequired,
  onHover: PropTypes.func,
  onItemActive: PropTypes.func.isRequired,
  placeCardBookmarkHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.APLICATION_PROCESS.sortType
});

export default withActiveItem(connect(mapStateToProps)(PlacesList));
