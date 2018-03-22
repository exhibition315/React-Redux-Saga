import { call, put, takeEvery } from 'redux-saga/effects';
import { fetch } from './api';
import * as types from './actionTypes';
import * as actions from './actions';

function* proccessFetch(action) {
    try {
        const { text } = action;
        const token = yield call(fetch, text);
        yield put(actions.fetchDataSuccess(token));
    } catch (err) {
        yield put(actions.fetchDataFail(err));
    }
}

export const mainSaga = [
    takeEvery(types.FETCH_DATA, proccessFetch)
];

