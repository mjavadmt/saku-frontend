import { combineReducers } from "redux";
import auth from "./auth";
import auction from "./auctoins";

export const reducers = combineReducers({
  auth,
  auction,
});
