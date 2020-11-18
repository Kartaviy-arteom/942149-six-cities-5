import {combineReducers} from "redux";
import {getData} from "./data/data";
import {applicationProcess} from "./application-process/application-process";

export default combineReducers({
  [`getData`]: getData,
  [`applicationProcess`]: applicationProcess,
});
