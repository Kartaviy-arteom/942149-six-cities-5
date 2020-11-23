import React from "react";
import PropTypes from "prop-types";
import PlaceCardProp from "../place-card/place-card.prop";
import {connect} from "react-redux";
import {changeOfferStatus} from "../../store/api-actions";
import {withActiveFlag} from "../../hocs/with-active-flag/with-active-flag";
import {AuthorizationStatus} from "../../consts";
import {ActionCreator} from "../../store/action";

const BookmarkButton = ({offer, onActiveChange, isActive, updateOffer, authorizationStatus, redirectToRoute}) => {
  const {isFavorite} = offer;

  const onClick = (evt) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      onActiveChange();
      updateOffer(offer.offerId, Number(isActive));
    } else {
      redirectToRoute(`/login`);
    }
  };

  return (
    <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button" onClick={onClick}>
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarkButton.propTypes = {
  offer: PlaceCardProp,
  onActiveChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  updateOffer: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  updateOffer(hotelId, status) {
    dispatch(changeOfferStatus(hotelId, status));
  },
  redirectToRoute(url) {
    dispatch(ActionCreator.redirectToRoute(url));
  }
});

export default withActiveFlag(connect(mapStateToProps, mapDispatchToProps)(BookmarkButton));
