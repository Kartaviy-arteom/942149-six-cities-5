import React from "react";
import PropTypes from "prop-types";
import PlaceCardProp from "../place-card/place-card.prop";
import {connect} from "react-redux";
import {changeOfferStatus} from "../../store/api-actions";
import {AuthorizationStatus} from "../../consts";
import {ActionCreator} from "../../store/action";

const BookmarkButton = ({offer, updateOffer, authorizationStatus, redirectToRoute, parentClassPrefix}) => {
  const {isFavorite} = offer;

  const onClick = (evt) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      updateOffer(offer.offerId, Number(!isActive));
    } else {
      redirectToRoute(`/login`);
    }
  };

  return (
    <button className={`${parentClassPrefix}__bookmark-button button ${isFavorite ? `${parentClassPrefix}__bookmark-button--active` : ``}`} type="button" onClick={onClick}>
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarkButton.propTypes = {
  offer: PlaceCardProp,
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

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);
