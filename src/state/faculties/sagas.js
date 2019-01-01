import { call, put, takeEvery } from "redux-saga/effects";

import { fetchFacultiesSuccess, fetchFacultiesError } from "./actions";

import rsf from "../rsf";

import { FETCH_FACULTIES } from "./constants";

function* fetchFaculties() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, "faculties");

    let faculties = [];
    snapshot.forEach(faculty => {
      faculties = [...faculties, faculty.data()];
    });

    yield put(fetchFacultiesSuccess(faculties));
  } catch (e) {
    yield put(fetchFacultiesError(e.message));
  }
}

function* watchFaculties() {
  yield takeEvery(FETCH_FACULTIES, fetchFaculties);
}

export default watchFaculties;
