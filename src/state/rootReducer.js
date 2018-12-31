import { combineReducers } from "redux";

import facultiesReducer from "./faculties/reducer";

const rootReducer = combineReducers({
  facultiesReducer
});

export default rootReducer;
