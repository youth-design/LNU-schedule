import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : f => f
);

const store = createStore(rootReducer, enhancers);

sagaMiddleware.run(rootSaga);

export default store;
