import { createAsyncAction } from 'typesafe-actions';
import { Orders } from './types';

const prefix = 'orders';

export const getOrdersAsync = createAsyncAction(
  `${prefix}/GET_ORDERS_REQUEST`,
  `${prefix}/GET_ORDERS_SUCCESS`,
  `${prefix}/GET_ORDERS_FAILURE`,
)<void, Orders, Error>();

// export const setToken = createAction('auth/SET_TOKEN')<Token>();
