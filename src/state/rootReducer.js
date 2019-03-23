import { combineReducers } from "redux";

import facultiesReducer from "./faculties/reducer";
import facultyReducer from "./faculties/faculty/reducer";
import groupsReducer from "./groups/reducer";
import groupReducer from "./groups/group/reducer";
import scheduleReducer from "./schedule/reducer";
import scheduleTimeReducer from "./scheduleTime/reducer";

const rootReducer = combineReducers({
  facultiesReducer,
  facultyReducer,
  groupsReducer,
  groupReducer,
  scheduleReducer,
  scheduleTimeReducer
});

export default rootReducer;
