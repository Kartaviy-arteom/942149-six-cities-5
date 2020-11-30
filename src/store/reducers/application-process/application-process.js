import {ActionType} from "../../action";
import {SortTypes, CITIES} from "../../../consts";

const initialState = {
  cities: CITIES,
  activeCity: CITIES[0],
  sortType: SortTypes.POPULAR,
  activeOffer: null,
};

const applicationProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {activeCity: action.payload});
    case ActionType.CHANGE_SORT_TYPE:
      return Object.assign({}, state, {sortType: action.payload});
    case ActionType.GET_HOVERED_OFFER:
      return Object.assign({}, state, {activeOffer: action.payload});
    case ActionType.GET_COMMENTS:
      return Object.assign({}, state, {activeOfferComments: action.payload});
  }

  return state;
};

export {applicationProcess};
