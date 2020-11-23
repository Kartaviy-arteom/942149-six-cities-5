import {ActionType} from "../../action";
import {updateItem} from "../../../utils";

const initialState = {
  offers: [],
};

const getData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    case ActionType.UPDATE_OFFER:
      return Object.assign({}, state, {offers: updateItem(state.offers, action.payload)});
  }

  return state;
};

export {getData};
