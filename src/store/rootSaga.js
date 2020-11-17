import { all } from 'redux-saga/effects'
import { ProductSagaWatch } from './Product/sagas'
import { IsLoadingWatch } from './Loading/sagas'

export default function* rootSaga() {
    yield all([
      ProductSagaWatch(),
      IsLoadingWatch()
    ])
  }