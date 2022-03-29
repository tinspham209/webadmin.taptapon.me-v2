import { TableParams } from '../types';

export type UserSocial = {
  icon: string;
  order: number;
  title: string;
  url: string;
};

export type FireStoreTimeType = {
  seconds: number;
  nanoseconds: number;
};

export type Orders = OrderDetail[];

export type OrderDetail = {
  address: string;
  cardType: string;
  dateCreated: FireStoreTimeType;
  fbLink: string;
  name: string;
  phoneNumber: string;
  id: string;
};

export type GetOrdersParams = TableParams;

export enum OrdersParamKey {
  ADDRESS = 'address',
  CARD_TYPE = 'cardType',
  DATE_CREATED = 'dateCreated',
  FB_LINK = 'fbLink',
  NAME = 'name',
  PHONE_NUMBER = 'phoneNumber',
}
