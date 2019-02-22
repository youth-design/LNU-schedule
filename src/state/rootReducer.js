import { combineReducers } from "redux";

import facultiesReducer from "./faculties/reducer";
import groupsReducer from "./groups/reducer";
import scheduleReducer from "./schedule/reducer";
import scheduleTimeReducer from "./scheduleTime/reducer";

const rootReducer = combineReducers({
  facultiesReducer,
  groupsReducer,
  scheduleReducer,
  scheduleTimeReducer
});

export default rootReducer;
