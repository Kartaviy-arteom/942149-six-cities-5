import offers from "../mocks/offers";
import cities from "../mocks/cities";
import {ActionType} from "./action";

const initialState = {
  cities,
  activeCity: cities[0],
  offers,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {activeCity: action.payload});
  }

  return state;
};

export {reducer};
