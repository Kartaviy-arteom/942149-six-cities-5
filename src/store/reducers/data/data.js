import {ActionType} from "../../action";

const initialState = {
  offers: [],
};

const getData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
  }

  return state;
};

export {getData};
