import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  applyMiddleware(sagaMiddleware)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);

export default store;
