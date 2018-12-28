import { combineReducers } from "redux";
import category from "../reducers/category";
import card from "../reducers/card";

const rootReducer = combineReducers({ category, card });

export default rootReducer;
