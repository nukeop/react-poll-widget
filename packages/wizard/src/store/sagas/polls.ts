import { all, takeLatest, call, put } from 'redux-saga/effects';

import { findAllPolls } from '../../api/polls';
import { Polls } from '../consts/actionTypes';
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
    takeLatest(Polls.FETCH_ALL_POLLS, fetchAllPollsSaga)
  ]);
}