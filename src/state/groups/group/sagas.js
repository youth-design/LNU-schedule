import { put, takeEvery } from "redux-saga/effects";
import { getGroupSuccess, getGroupError } from "./actions";
import { GET_GROUP } from "./constants";

function* getGroup({ history }) {
  const group = window.localStorage.getItem("group");
  if (group) {
    yield put(getGroupSuccess(group));
  } else {
    yield history.push("/choice");
    yield put(getGroupError());
  }
}

function* watchGroup() {
  yield takeEvery(GET_GROUP, getGroup);
}

export default watchGroup;
