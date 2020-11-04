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
    case ActionType.CHANGE_CITIES:
      return Object.assign({}, state, {city: action.payload});
  }

  return state;
};

export {reducer};


