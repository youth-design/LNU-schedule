import { call, put, takeEvery, all } from "redux-saga/effects";

import { apiGet } from "api/methods";

import { fetchFacultiesSuccess, fetchFacultiesError } from "./actions";

import { FETCH_FACULTIES } from "./constants";
import watchFaculty from "./faculty/sagas";

function* fetchFaculties() {
  const faculties = yield call(
    apiGet,
    "https://dev-template.github.io/schedule_dahl/faculties.json"
  );
  if (!faculties.error) {
    yield put(fetchFacultiesSuccess(faculties));
  } else {
    yield put(fetchFacultiesError("Что-то пошло не так"));
  }
}

function* watchFaculties() {
  yield takeEvery(FETCH_FACULTIES, fetchFaculties);
}

function* rootWatchFaculties() {
  yield all([watchFaculties(), watchFaculty()]);
}

export default rootWatchFaculties;
