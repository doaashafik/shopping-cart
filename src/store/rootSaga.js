import { all } from 'redux-saga/effects'
import { BookSagaWatch } from './Book/sagas'
import { IsLoadingWatch } from './Loading/sagas'

export default function* rootSaga() {
    yield all([
      BookSagaWatch(),
      IsLoadingWatch()
    ])
  }