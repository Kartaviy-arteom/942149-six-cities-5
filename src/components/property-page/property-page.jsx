import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchOffer, getOfferComments, getNerbyOffers, changeOfferStatus} from "../../store/api-actions";
import placeCardProp from "../place-card/place-card.prop";
import Header from "../header/header";
import CommentForm from "../comment-form/comment-form";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import PlacesList from "../places-list/places-list";
import {MAX_RATING_VALUE} from "../../consts";
import BookmarkButton from "../bookmark-button/bookmark-button";
import {AuthorizationStatus} from "../../consts";
import {ActionCreator} from "../../store/action";
import {withActiveItem} from "../../hocs/with-active-item/with-active-item";

const MAX_PHOTOS_COUNT = 6;
class PropertyPage extends PureComponent {
  constructor(props) {
    super(props);
    this._changeFavoriteOfferStatus = this._changeFavoriteOfferStatus.bind(this);
  }

  componentDidMount() {
    this.props.onItemActive();
  }

  componentDidUpdate() {
    const currentOfferId = this.props.match.params.id;

    if (currentOfferId !== this.props.activeElement) {
      this.props.onItemActive(currentOfferId);
      this.props.getOffer(currentOfferId);
      this.props.getNerbyOffers(currentOfferId);
      this.props.getOfferComments(currentOfferId);
    }
  }

  _changeFavoriteOfferStatus(offer) {
    if (this.props.authorizationStatus === AuthorizationStatus.AUTH) {
      this.props.updateOffer(offer.offerId, Number(!offer.isFavorite));
    } else {
      this.props.redirectToRoute(`/login`);
    }
  }

  render() {
    if (!this.props.activeOffer || !this.props.nearbyOffers || !this.props.comments) {
      return (
        <div className="loading">Loading ...</div>
      );
    }
    const {nearbyOffers, activeOffer, comments} = this.props;
    const {isPremium, photoPaths, costValue, ratingValue, title, type, bedroomsCount, maxGuestsCount, owner, description, amenities, offerId} = activeOffer;
    const {avatarPath, ownerName, isSuper} = owner;
    const ratingPercentValue = (Math.round(ratingValue) / MAX_RATING_VALUE) * 100;
    return (
      <div className="page">
        <Header/>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">

                {photoPaths.map((el, index) => (
                  <div className="property__image-wrapper" key={`${el}-${index}`}>
                    <img className="property__image" src={`${el}`} alt="Photo studio" />
                  </div>
                )).slice(0, Math.min(photoPaths.length, MAX_PHOTOS_COUNT))}

              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  isPremium && <div className="place-card__mark"><span>Premium</span></div>
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <BookmarkButton offer={activeOffer} parentClassPrefix={`property`} handleClick={() => this._changeFavoriteOfferStatus(this.props.activeOffer)} />
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${ratingPercentValue}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{ratingValue}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedroomsCount} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxGuestsCount} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{costValue}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {amenities.map((element, index) => (
                      <li key={`${element}-${index}`}className="property__inside-item">
                        {element}
                      </li>
                    )
                    )}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${isSuper ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={`/${avatarPath}`} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {ownerName}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                  <ReviewsList reviews={comments}/>
                  {this.props.authorizationStatus === AuthorizationStatus.AUTH ? (<CommentForm currentOfferId={offerId}/>) : ``}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map validOffers={nearbyOffers.slice(0, 3)} activeOffer={activeOffer}/>
            </section>
          </section>

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlacesList offers={nearbyOffers} className={`near-places__list`} childClassName={`near-places`} placeCardBookmarkHandler={this._changeFavoriteOfferStatus}/>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

PropertyPage.propTypes = {
  activeOffer: PropTypes.shape(placeCardProp),
  comments: PropTypes.arrayOf(
      PropTypes.shape({
        avatarPath: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        reviewText: PropTypes.string.isRequired,
      })
  ),
  match: PropTypes.object.isRequired,
  nearbyOffers: PropTypes.array,
  getOffer: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  updateOffer: PropTypes.func.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
  getNerbyOffers: PropTypes.func.isRequired,
  getOfferComments: PropTypes.func.isRequired,
  onItemActive: PropTypes.func.isRequired,
  activeElement: PropTypes.string,
};

const mapStateToProps = (state) => ({
  activeOffer: state.DATA.currentOffer,
  nearbyOffers: state.DATA.nerbyOffers,
  comments: state.APLICATION_PROCESS.activeOfferComments,
  authorizationStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  getOffer(hotelId) {
    dispatch(fetchOffer(hotelId));
  },
  getNerbyOffers(hotelId) {
    dispatch(getNerbyOffers(hotelId));
  },
  getOfferComments(hotelId) {
    dispatch(getOfferComments(hotelId));
  },
  updateOffer(hotelId, status) {
    dispatch(changeOfferStatus(hotelId, status));
  },
  redirectToRoute(url) {
    dispatch(ActionCreator.redirectToRoute(url));
  }
});

export default withActiveItem(connect(mapStateToProps, mapDispatchToProps)(PropertyPage));
