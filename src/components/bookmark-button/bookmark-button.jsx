import React from "react";
import PropTypes from "prop-types";
import PlaceCardProp from "../place-card/place-card.prop";
import {connect} from "react-redux";
import {changeOfferStatus} from "../../store/api-actions";

const BookmarkButton = ({offer, parentClassPrefix, handleClick}) => {
  const {isFavorite} = offer;

  const onClick = (evt) => {
    evt.preventDefault();
    handleClick();
  };

  return (
    <button className={`${parentClassPrefix}__bookmark-button button ${isFavorite ? `${parentClassPrefix}__bookmark-button--active` : ``}`} type="button" onClick={onClick}>
      <svg className={`${parentClassPrefix}__bookmark-icon`} width="18" height="19">
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
  parentClassPrefix: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  updateOffer(hotelId, status) {
    dispatch(changeOfferStatus(hotelId, status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);
