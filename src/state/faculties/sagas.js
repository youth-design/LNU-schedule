import { call, put, takeEvery } from "redux-saga/effects";

import { apiGet } from "api/methods";

import { fetchFacultiesSuccess, fetchFacultiesError } from "./actions";

import { FETCH_FACULTIES } from "./constants";

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

export default watchFaculties;
