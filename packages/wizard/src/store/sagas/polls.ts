import { Poll } from '@react-poll-widget/core/src/models/polls';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import { findAllPolls, findPoll } from '../../api/polls';
import { fetchAllPolls, fetchPoll } from '../actions/polls';

function* fetchAllPollsSaga() {
  try {
    const polls: Poll[] = yield call(findAllPolls);
    yield put(fetchAllPolls.success(polls));
  } catch (e) {
    yield put(fetchAllPolls.failure(e))
  }
}

function* fetchPollSaga({ payload }: ReturnType<typeof fetchPoll.request>) {
  try {
    const poll: Poll = yield call(findPoll, payload);
    yield put(fetchPoll.success(poll));
  } catch (e) {
    yield put(fetchPoll.failure(e));
  }
}

export function* pollsSaga() {
  yield all([
    takeLatest(fetchAllPolls.request, fetchAllPollsSaga),
    takeLatest(fetchPoll.request, fetchPollSaga)
  ]);
}