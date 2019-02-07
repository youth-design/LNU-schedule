import { combineReducers } from "redux";

import facultiesReducer from "./faculties/reducer";
import groupsReducer from "./groups/reducer";
import scheduleReducer from "./schedule/reducer";

const rootReducer = combineReducers({
  facultiesReducer,
  groupsReducer,
  scheduleReducer
});

export default rootReducer;
