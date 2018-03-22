import { all } from 'redux-saga/effects';
import { mainSaga } from './containers/Main/saga';

export default function* rootSaga() {
    yield all([
        ...mainSaga
    ]);
}
