import { all } from "redux-saga/effects";

import watchFaculties from "./faculties/sagas";
import watchGroups from "./groups/sagas";
import watchSchedule from "./schedule/sagas";
import watchScheduleTime from "./scheduleTime/sagas";

export default function* rootSaga() {
  yield all([
    watchFaculties(),
    watchGroups(),
    watchSchedule(),
    watchScheduleTime()
  ]);
}
