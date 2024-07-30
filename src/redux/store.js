// src/redux/store.js

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { productListReducer } from './reducers/MobileReducer'; // Correct path to MobileReducer
import watchProductActions from './sagas'; // Correct path to sagas

// Create Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// Create Redux Store with Saga Middleware
const store = createStore(
    productListReducer,
    applyMiddleware(sagaMiddleware)
);

// Run the Saga
sagaMiddleware.run(watchProductActions);

export default store;
