import {ActionType} from "../../action";
import {updateItem} from "../../../utils";

const initialState = {
  offers: [],
  currentOffer: null,
  nerbyOffers: [],
};

const getData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return Object.assign({}, state, {
        favoriteOffers: action.payload,
      });
    case ActionType.UPDATE_OFFER:
      return Object.assign({}, state, {
        offers: updateItem(state.offers, action.payload),
        currentOffer: updateItem([state.currentOffer], action.payload)[0],
        nerbyOffers: updateItem(state.nerbyOffers, action.payload),
      });
    case ActionType.DELETE_OFFER_FROM_FAVORITES:
      let newFavoritesOffers = Object.assign({}, state.favoriteOffers);
      newFavoritesOffers[action.payload.city] = newFavoritesOffers[action.payload.city].filter((el) => (el.offerId !== action.payload.offerId));
      newFavoritesOffers.offersCount = newFavoritesOffers.offersCount - 1;
      return Object.assign({}, state, {
        offers: updateItem(state.offers, action.payload),
        currentOffer: updateItem([state.currentOffer], action.payload)[0],
        nerbyOffers: updateItem(state.nerbyOffers, action.payload),
        favoriteOffers: newFavoritesOffers,
      });
    case ActionType.GET_NERBY_OFFERS:
      return Object.assign({}, state, {
        nerbyOffers: action.payload
      });
    case ActionType.DOWNLOAD_OFFER:
      return Object.assign({}, state, {currentOffer: action.payload});
  }

  return state;
};

export {getData};
