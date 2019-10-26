import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";

import root from "./sagas";

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = {}) {
  return createStore(reducers, initialState, applyMiddleware(sagaMiddleware));
}

const store = configureStore();

sagaMiddleware.run(root);

export default store;
