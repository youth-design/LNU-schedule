import { all } from "redux-saga/effects";

import watchFaculties from "./faculties/sagas";

export default function* rootSaga() {
  yield all([watchFaculties()]);
}
