import { call, put, takeEvery, all } from "redux-saga/effects";

import { apiGet } from "api/methods";

import { fetchGroupsSuccess, fetchGroupsError } from "./actions";

import { FETCH_GROUPS } from "./constants";
import watchGroup from "./group/sagas";

function* fetchGroups() {
  let groups = yield call(
    apiGet,
    "https://dev-template.github.io/schedule_dahl/groups.json"
  );
  if (!groups.error) {
    yield put(fetchGroupsSuccess(groups));
  } else {
    yield put(fetchGroupsError("Что-то пошло не так"));
  }
}

function* watchGroups() {
  yield takeEvery(FETCH_GROUPS, fetchGroups);
}

function* rootWatchGroups() {
  yield all([watchGroups(), watchGroup()]);
}

export default rootWatchGroups;
