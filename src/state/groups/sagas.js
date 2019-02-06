import { call, put, takeEvery } from "redux-saga/effects";

import { apiGet } from "api/methods";

import { fetchGroupsSuccess, fetchGroupsError } from "./actions";

import { FETCH_GROUPS } from "./constants";

function* fetchGroups({ collectionToFetch }) {
  let groups = yield call(
    apiGet,
    "https://dev-template.github.io/schedule_dahl/groups.json"
  );
  if (!groups.error) {
    yield put(fetchGroupsSuccess(groups[collectionToFetch]));
  } else {
    yield put(fetchGroupsError("Что-то пошло не так"));
  }
}

function* watchGroups() {
  yield takeEvery(FETCH_GROUPS, fetchGroups);
}

export default watchGroups;
