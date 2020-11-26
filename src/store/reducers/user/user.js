import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../consts";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.GET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.payload,
      });
  }

  return state;
};

export {user};
