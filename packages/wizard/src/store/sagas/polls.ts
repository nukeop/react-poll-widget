import { all, takeLatest, call, put } from 'redux-saga/effects';

import { findAllPolls } from '../../api/polls';
import { fetchAllPolls } from '../actions/polls';

function * fetchAllPollsSaga() {
  try {
    const polls = yield call(findAllPolls);
    yield put(fetchAllPolls.success(polls));
  } catch (e) {
    yield put(fetchAllPolls.failure(e))
  }
}

export function* pollsSaga() {
  yield all([
    takeLatest(fetchAllPolls.request, fetchAllPollsSaga)
  ]);
}