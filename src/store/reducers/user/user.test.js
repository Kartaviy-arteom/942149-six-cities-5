import {user} from "./user";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../consts";

const userInformation = {
  id: 1,
  email: `test@mail.ru`,
  name: `boris`,
  avatarUrl: `img.jpg`,
  isPro: false,
};

describe(`User reducer work correctly`, () => {
  it(`Users Reducer without additional parameters should return initial state`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });
  });

  it(`Reducer should update authorization status`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });
  });

  it(`Reducer should get user info`, () => {
    expect(user({
      userInfo: {},
    }, {
      type: ActionType.GET_USER_INFO,
      payload: userInformation,
    })).toEqual({
      userInfo: userInformation,
    });
  });
});
