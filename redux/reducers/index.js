import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

// standard boilerplate
let reducers = combineReducers({
  cartReducer: cartReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
