import { call, put, takeEvery } from "redux-saga/effects";

import { fetchGroupsSuccess, fetchGroupsError } from "./actions";

import rsf from "../rsf";
import { FETCH_GROUPS } from "./constants";

function* fetchGroups({ collectionToFetch }) {
  try {
    const snapshot = yield call(rsf.firestore.getCollection, collectionToFetch);

    let groups = [];
    snapshot.forEach(group => {
      groups = [...groups, group.data()];
    });
    yield put(fetchGroupsSuccess(groups));
  } catch (e) {
    yield put(fetchGroupsError(e.message));
  }
}

function* watchGroups() {
  yield takeEvery(FETCH_GROUPS, fetchGroups);
}

export default watchGroups;
