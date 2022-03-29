import { call, put, takeLatest } from 'redux-saga/effects';
import { Apis } from 'src/services/api';
import { toastifyErrorSaga } from '../commonSagas/toastifyFailureSaga';
import { isEmpty } from './../../validations';
import { getOrdersAsync } from './actions';

function* getOrders(api, asyncActionCreator) {
  const response = yield call(api);
  try {
    if (!isEmpty(response)) {
      const sortResponse = response.sort((a, b) => {
        return b.dateCreated.toDate() - a.dateCreated.toDate();
      });
      yield put(getOrdersAsync.success(sortResponse));
    }
  } catch (error) {
    yield toastifyErrorSaga(error);
  }
}

export default function authSaga(apiInstance: Apis) {
  // return [takeLatest(getUserInfoAsync.request, getUserInfo, apiInstance.getUserInfo)];
  return [takeLatest(getOrdersAsync.request, getOrders, apiInstance.getOrders)];
}
