import {Platform} from 'react-native';

export const baseUrl =
  'https://us-central1-prueba-front-280718.cloudfunctions.net';

export const isIos = Platform.OS === 'ios';

export enum STATE_MODULES {
  OPENINGS = 'openings',
  FITTINGS = 'fittings',
  EQUIPMENT = 'equipment',
}

export enum ACTIONS {
  GET_OPENINGS = 'GET_OPENINGS',
  GET_FITTINGS = 'GET_FITTINGS',
  GET_EQUIPMENT = 'GET_EQUIPMENT',
}
