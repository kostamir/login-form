import formReducer from "./formReducer";
import isLoggedReducer from "./isLoggedReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  form: formReducer,
  isLogged: isLoggedReducer,
});

export default rootReducer;
