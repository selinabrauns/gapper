import { takeEvery, select, call } from 'redux-saga/effects';
import { commonActions } from '../actions/commonAction';
import Api from '../../api/';

function* testAsync(action) {
  const state = yield select();
  console.log(action, state);
  // const response = yield call(Api.get, '/users');
  // console.log(response)

}

export default function* commonSaga() {
  yield takeEvery(commonActions.test().type, testAsync)
}