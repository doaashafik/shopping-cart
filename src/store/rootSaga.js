import { all } from 'redux-saga/effects'
import { BookSagaWatch } from './Book/sagas'


export default function* rootSaga() {
    yield all([
      BookSagaWatch()
    ])
  }