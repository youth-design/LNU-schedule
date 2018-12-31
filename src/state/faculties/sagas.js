import { call, put, takeEvery } from "redux-saga/effects";

import { getFacultiesSuccess, getFacultiesError } from "./actions";

import rsf from "../rsf";

import { GET_FACULTIES } from "./constants";

function* getFaculties() {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, "faculties");

    let faculties = [];
    snapshot.forEach(faculty => {
      faculties = [...faculties, faculty.data()];
    });

    yield put(getFacultiesSuccess(faculties));
  } catch (e) {
    yield put(getFacultiesError(e.message));
  }
}

function* watchFaculties() {
  yield takeEvery(GET_FACULTIES, getFaculties);
}

export default watchFaculties;
