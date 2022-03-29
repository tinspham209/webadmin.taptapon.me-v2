import { combineReducers } from 'redux';
import { AsyncState } from 'src/utils/commonAsyncReducer';
import { createReducer } from 'typesafe-actions';
import { getOrdersAsync } from './actions';
import { Orders } from './types';

export type IOrdersState = Readonly<{
  orders: AsyncState<Orders>;
}>;

const defaultAsyncState = {
  loading: false,
  error: null,
};

// const defaultAsyncStateWithDataEmpty = {
//   data: null,
//   loading: false,
//   error: null,
// };

/* ------------- Initial State ------------- */
const initialState: IOrdersState = {
  orders: {
    ...defaultAsyncState,
    data: [],
  },
};
export const ordersReducer = createReducer<AsyncState<Orders>>(initialState.orders)
  .handleAction([getOrdersAsync.request], (state, action) => ({
    ...state,
    loading: true,
  }))
  .handleAction([getOrdersAsync.success], (state, action) => ({
    ...state,
    loading: false,
    data: action.payload,
  }))
  .handleAction([getOrdersAsync.failure], (state, action) => ({
    ...state,
    loading: false,
    data: [],
    error: action.payload,
  }));

export default combineReducers<IOrdersState>({
  orders: ordersReducer,
});
