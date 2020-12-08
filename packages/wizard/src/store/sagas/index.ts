import { all, fork } from 'redux-saga/effects'
import { pollsSaga } from './polls'

export const indexSaga = () => {
  return function* () {
    yield all([
      fork(pollsSaga)
    ])
  }
}