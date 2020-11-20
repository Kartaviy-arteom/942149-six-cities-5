import {combineReducers} from "redux";
import {getData} from "./data/data";
import {applicationProcess} from "./application-process/application-process";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  APLICATION_PROCESS: `APLICATION_PROCESS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: getData,
  [NameSpace.APLICATION_PROCESS]: applicationProcess,
  [NameSpace.USER]: user
});
