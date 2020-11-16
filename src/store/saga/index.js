import { put, takeEvery, all } from 'redux-saga/effects'
import { watch } from './sagas'


export default function* rootSaga() {
    yield all([
      watch()
    ])
  }