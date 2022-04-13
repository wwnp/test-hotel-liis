/* eslint-disable require-yield */
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';
import { getHotels } from '../../api';
import { END_LOADING, SET_HOTELS, SET_REQUEST } from '../contants';
import { START_LOADING } from './../contants';

export function* fetchHotels() {
  const currDate = new Date()
  const checkOut = new Date()
  checkOut.setDate(currDate.getDate() + 7);

  const stringCurrDate = currDate.toISOString().split('T')[0]
  const stringCheckOut = checkOut.toISOString().split('T')[0]

  const results = yield call(getHotels.bind(null, 'Moscow', stringCurrDate, stringCheckOut))
  yield put({ type: SET_HOTELS, payload: results })
  yield put({ type: END_LOADING })
}
function* fetchHots() {
  yield put({ type: START_LOADING })
  const homepage = yield select(({ homepage }) => homepage);
  const { request } = homepage
  const { location, date, days } = request

  const neededDate = new Date(date)
  const checkOut = new Date()
  checkOut.setDate(neededDate.getDate() + parseInt(days));


  const stringCurrDate = neededDate.toISOString().split('T')[0]
  const stringCheckOut = checkOut.toISOString().split('T')[0]

  const results = yield call(getHotels.bind(null, location, stringCurrDate, stringCheckOut))
  yield put({ type: SET_HOTELS, payload: results })
  yield put({ type: END_LOADING })
}

export function* watchNewsSaga() {
  const path = yield select(({ router }) => router.location.pathname);
  if (path === '/') {
    yield call(fetchHotels);
  }
}
export default function* rootSaga() {
  yield takeLatest(LOCATION_CHANGE, watchNewsSaga);
  yield takeLatest(SET_REQUEST, fetchHots);
}