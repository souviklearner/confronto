import { combineReducers } from "redux";
import catalogReducer from "./catalogReducer";
import compareReducer from "./compareReducer";

export default combineReducers({
  catalog: catalogReducer,
  compare: compareReducer
});
