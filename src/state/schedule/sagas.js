import { call, put, takeEvery } from "redux-saga/effects";

import { apiGet } from "api/methods";

import {
  FETCH_SCHEDULE,
  FETCH_SCHEDULE_FROM_CACHE,
  RECONNECT
} from "./constants";

import {
  fetchScheduleSuccess,
  fetchScheduleError,
  fetchScheduleFromCacheSuccess,
  fetchScheduleFromCacheError,
  reconnectSuccess,
  reconnectError
} from "./actions";

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

function* fetchScheduleFromCache({ groupToFetch }) {
  if (window.localStorage.getItem("cached_group") === groupToFetch) {
    yield put(
      fetchScheduleFromCacheSuccess(
        JSON.parse(window.localStorage.getItem("cached_schedule"))
      )
    );
  } else {
    yield put(fetchScheduleFromCacheError());
  }
}

function* reconnect() {
  const status = yield call(
    apiGet,
    "https://dev-template.github.io/schedule_dahl/faculties.json"
  );
  if (!status.error) {
    yield put(reconnectSuccess());
  } else {
    yield put(reconnectError());
  }
}

function* watchSchedule() {
  yield takeEvery(FETCH_SCHEDULE, fetchSchedule);
  yield takeEvery(FETCH_SCHEDULE_FROM_CACHE, fetchScheduleFromCache);
  yield takeEvery(RECONNECT, reconnect);
}

export default watchSchedule;
