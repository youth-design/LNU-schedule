import { combineReducers } from "redux";

import facultiesReducer from "./faculties/reducer";
import groupsReducer from "./groups/reducer";

const rootReducer = combineReducers({
  facultiesReducer,
  groupsReducer
});

export default rootReducer;
