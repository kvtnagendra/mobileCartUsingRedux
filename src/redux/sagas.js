

import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_PRODUCT_REQUEST, REMOVE_PRODUCT_REQUEST, addProductSuccess, removeProductSuccess } from './actions/Product-action';


function* addProductSaga(action) {
    try {
        yield call(() => new Promise(resolve => setTimeout(resolve, 1000)));
        yield put(addProductSuccess(action.product));
    } catch (e) {
        console.error(e);
    }
}

function* removeProductSaga(action) {
    try {
        yield call(() => new Promise(resolve => setTimeout(resolve, 1000)));
        yield put(removeProductSuccess(action.product));
    } catch (e) {
        console.error(e);
    }
}


function* watchProductActions() {
    yield takeEvery(ADD_PRODUCT_REQUEST, addProductSaga);
    yield takeEvery(REMOVE_PRODUCT_REQUEST, removeProductSaga);
}

export default watchProductActions;
