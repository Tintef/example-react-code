import {
  take,
  call,
  put,
} from 'redux-saga/effects';
import * as constants from '../actions/constants';
import { api } from '../../data/api';

function* fetchUser() {
  while (true) {
    const {
      id,
    } = yield take(constants.FETCH_USER);

    yield put({ type: constants.SET_LOADING, value: true });
    try {
      const response = yield call(api.getUser, id);
      /*
        Handle response

        i.e.
        yield put({ type: constants.SET_USER, user: response });
      */
    } catch (error) {
      /*
        Handle error
      */
    } finally {
      yield put({ type: constants.SET_LOADING, value: false });
    }
  }
}

export default [
  fetchData,
];
