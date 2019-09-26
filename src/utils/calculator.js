import { NUMBER, OPERATION, EQUAL } from './fixtures';

export const keyMapping = {
  13: {
    value: '=',
    type: EQUAL
  },
  42: {
    value: '*',
    type: OPERATION
  },
  43: {
    value: '+',
    type: OPERATION
  },
  45: {
    value: '-',
    type: OPERATION
  },
  47: {
    value: '/',
    type: OPERATION
  },
  48: {
    value: 0,
    type: NUMBER
  },
  49: {
    value: 1,
    type: NUMBER
  },
  50: {
    value: 2,
    type: NUMBER
  },
  51: {
    value: 3,
    type: NUMBER
  },
  52: {
    value: 4,
    type: NUMBER
  },
  53: {
    value: 5,
    type: NUMBER
  },
  54: {
    value: 6,
    type: NUMBER
  },
  55: {
    value: 7,
    type: NUMBER
  },
  56: {
    value: 8,
    type: NUMBER
  },
  57: {
    value: 9,
    type: NUMBER
  },
  61: {
    value: '=',
    type: EQUAL
  }
}

export const getKeyCodeData = keyCode => keyMapping[keyCode] || {};