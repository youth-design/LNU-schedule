import { all } from "redux-saga/effects";

import rootWatchFaculties from "./faculties/sagas";
import rootWatchGroups from "./groups/sagas";
import watchSchedule from "./schedule/sagas";
import watchScheduleTime from "./scheduleTime/sagas";

export default function* rootSaga() {
  yield all([
    rootWatchFaculties(),
    rootWatchGroups(),
    watchSchedule(),
    watchScheduleTime()
  ]);
}
