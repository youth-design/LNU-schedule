import { call, put, takeEvery } from "redux-saga/effects";

import { apiGet } from "api/methods";

import { FETCH_SCHEDULE_TIME } from "./constants";

import { fetchScheduleTimeSuccess, fetchScheduleTimeError } from "./actions";

function* getScheduleTime() {
  const newScheduleTime = yield call(
    apiGet,
    "https://dev-template.github.io/schedule_dahl/schedule.json"
  );
  if (!newScheduleTime.error) {
    yield put(fetchScheduleTimeSuccess(newScheduleTime));
  } else {
    yield put(fetchScheduleTimeError(newScheduleTime.error));
  }
}

function* watchScheduleTime() {
  yield takeEvery(FETCH_SCHEDULE_TIME, getScheduleTime);
}

export default watchScheduleTime;
