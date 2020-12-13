import { all, takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { createPoll, findAllPolls } from '../../api/polls';
import { Polls } from '../consts/actionTypes';
import { postPoll, fetchAllPolls } from '../actions/polls';
import { Poll } from '../../models/polls';

function * fetchAllPollsSaga() {
  try {
    const polls = yield call(findAllPolls);
    yield put(fetchAllPolls.success(polls));
  } catch (e) {
    yield put(fetchAllPolls.failure(e))
  }
}

function * createPollSaga({ payload }: { payload: string }) {
  try {
    const newPoll: Poll = yield call(createPoll, payload);
    yield put(postPoll.success(newPoll));
    yield push(`/polls/${newPoll.id}`);
  } catch(e) {
    yield put(postPoll.failure(e));
  }
}

export function* pollsSaga() {
  yield all([
    takeLatest(fetchAllPolls.request, fetchAllPollsSaga),
    takeLatest(postPoll.request, createPollSaga)
  ]);
}