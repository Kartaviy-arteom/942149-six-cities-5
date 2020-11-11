import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import {connect} from "react-redux";
import {SortTypes} from "../../consts";
import {ActionCreator} from "../../store/action";
import {withActiveItem} from "../../hocs/with-active-item/with-active-item";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.onHover = this.onHover.bind(this);
  }

  onHover(currentCard) {
    this.props.onItemActive(currentCard);
    this.props.getHoveredOfferId(currentCard.props.offer.offerId);
  }

  render() {
    const {offers, className, childClassName, sortType} = this.props;
    let sortedOffers = offers.slice();
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
    return (
      <div className={`${className} places__list`}>
        {sortedOffers.map((el, index) => (
          <PlaceCard className={childClassName} offer = {el} onHover = {this.onHover} key = {`${el.title}-${index}`}/>
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  className: PropTypes.string,
  childClassName: PropTypes.string,
  sortType: PropTypes.string.isRequired,
  getHoveredOfferId: PropTypes.func.isRequired,
  onItemActive: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  getHoveredOfferId(id) {
    dispatch(ActionCreator.getHoveredOfferId(id));
  },
});

const mapStateToProps = (state) => ({
  sortType: state.sortType
});

export default withActiveItem(connect(mapStateToProps, mapDispatchToProps)(PlacesList));
