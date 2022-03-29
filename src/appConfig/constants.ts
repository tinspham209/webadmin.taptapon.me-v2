export const MAJOR_VERSION_NUMBER = 1;
export const MINOR_VERSION_NUMBER = 0;
export const VERSION_NUMBER = `${MAJOR_VERSION_NUMBER}.${MINOR_VERSION_NUMBER}.${
  process.env.REACT_APP_BUILD_NUMBER || 0
}`;

export const MODAL_WIDTH = 560;
export const ASSISTANCE_OTHER_ID = 6;

export const IS_TRANSIT_TRIP = 10;

export const FIRST_PCR_TEST_DAYS_FIJI = 3; // to be used temporarily
export const FIRST_PCR_TEST_DAYS = 10;
export const UPLOAD_PCR_RESULTS_DAYS = 5;
export const SECOND_PCR_TEST_DAYS = 5;
export const THIRD_PCR_TEST_DAYS = 1;
export const FOURTH_PCR_TEST_DAYS = 1;

export const EXEMPT_STEP = {
  FIRST_TEST: 'FIRST_TESTING',
  SECOND_TEST: 'SECOND_TESTING',
  THIRD_TEST: 'THIRD_TESTING',
  QUESTIONARE: 'QUESTIONNAIRE',
};

export const DANIEL_K_AIRPORT_ID = 5952;
export const PAGO_PAGO_AIRPORT_ID = 1489;
export const FIJI_AIRPORT_ID = 1481;

export const APIA_SAMOA_SEAPORT_ID = 5955;
export const PAGO_PAGO_SEAPORT_ID = 5956;

export const ADDRESS_TYPE_SAMOA_ID = 1;

export const FOREIGN_TRAVEL_DOCUMENT_TYPE_ID = 2;

export const ROW_HIGHLIGHT_IN_MS = 3000;

export const SYMPTOMS = [
  'Cough',
  'Muscle or body aches',
  'Sore throat',
  'Fever or chills',
  'Fatigue',
  'New loss of taste or smell',
  'Shortness of breath or difficulty breathing',
  'Headache',
  'Congestion or runny nose',
  'Nausea or vomiting',
  'Diarrhea',
];

export const DESTINATION_HOTEL_TYPE_ID = 7;
export const AS_ADDRESS = 1;
export const US_ID = 233;
export const SAMOA_STATE_ID = 4;
export const SAMOA_ZIP = '96799';
export const SAMOA_CITY = 'Pago Pago';
export const ADDRESS_TYPE_US_ID = 2;
export const ADDRESS_TYPE_INTERNATIONAL_ID = 3;
export const URL_SPLITTER = '|';

export const IS_ALL_TRAVELERS = 'isAllTravelers';

export const TRIP_TAB_FILTER = 'tripTabFilter';
export const TAB_FILTER = 'tabFilter';

export const MFA_TYPE = {
  NOMFA: 'NOMFA',
  TOTP: 'TOTP',
  SMS: 'SMS',
};

export const MFA_CONSTANT = {
  SOFTWARE_TOKEN_MFA: 'SOFTWARE_TOKEN_MFA',
};
