import { call, put, takeEvery } from "redux-saga/effects";

import { apiGet } from "api/methods";

import { FETCH_SCHEDULE } from "./constants";

import { fetchScheduleSuccess, fetchScheduleError } from "./actions";

function* fetchSchedule({ groupToFetch }) {
  const newSchedule = yield call(
    apiGet,
    `https://dev-template.github.io/schedule_dahl/${groupToFetch}.json`
  );
  if (!newSchedule.error) {
    yield put(fetchScheduleSuccess(newSchedule));
    window.localStorage.setItem("cached_group", groupToFetch);
    window.localStorage.setItem("cached_schedule", JSON.stringify(newSchedule));
  } else {
    yield put(fetchScheduleError(newSchedule.error));
  }
}

function* watchSchedule() {
  yield takeEvery(FETCH_SCHEDULE, fetchSchedule);
}

export default watchSchedule;
