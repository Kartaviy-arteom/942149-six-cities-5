// import offers from "../mocks/offers";
import cities from "../mocks/cities";
import {SortTypes} from "../consts";
import {ActionType} from "./action";

const initialState = {
  cities,
  activeCity: cities[0],
  sortType: SortTypes.POPULAR,
  offers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {activeCity: action.payload});
    case ActionType.CHANGE_SORT_TYPE:
      return Object.assign({}, state, {sortType: action.payload});
    case ActionType.GET_HOVERED_OFFER_ID:
      return Object.assign({}, state, {activeOfferId: action.payload});
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {offers: action.payload});
  }

  return state;
};

export {reducer};
