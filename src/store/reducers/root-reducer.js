import {combineReducers} from "redux";
import {getData} from "./data/data";
import {applicationProcess} from "./application-process/application-process";

export const NameSpace = {
  DATA: `DATA`,
  APLICATION_PROCESS: `APLICATION_PROCESS`,
};

export default combineReducers({
  [NameSpace.DATA]: getData,
  [NameSpace.APLICATION_PROCESS]: applicationProcess,
});
