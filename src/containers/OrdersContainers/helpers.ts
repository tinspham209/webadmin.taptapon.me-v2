import { FireStoreTimeType } from './../../redux/ordersRedux/types';
import { TableParams } from 'src/redux/types';

export type OrderQueryParams = TableParams;

export const formatFireStoreTime = (value: FireStoreTimeType) => {
  const dateInMillis = value.seconds * 1000;

  const date = new Date(dateInMillis).toDateString() + ' at ' + new Date(dateInMillis).toLocaleTimeString();
  return value ? date : '--';
};
