import { put, takeEvery } from "redux-saga/effects";
import { getFacultySuccess, getFacultyError } from "./actions";
import { GET_FACULTY } from "./constants";

function* getFaculty({ history }) {
  const faculty = yield window.localStorage.getItem("faculty");
  if (faculty) {
    yield put(getFacultySuccess(faculty));
  } else {
    yield history.push("/choice");
    yield put(getFacultyError());
  }
}

function* watchFaculty() {
  yield takeEvery(GET_FACULTY, getFaculty);
}

export default watchFaculty;
