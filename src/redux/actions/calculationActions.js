import { UPDATE_FORMULA, REFRESH_CALCULATOR, DO_CALCULATE } from '../type';
import { NUMBER, OPERATION, CLEAR, EQUAL } from '../../utils/fixtures';
import { getKeyCodeData } from '../../utils/calculator';

export const updateFormula = (value, type) => {
  return ({
    type: UPDATE_FORMULA,
    payload: {
      value,
      type
    }
  })
}

export const refreshCalculator = () => {
  return ({
    type: REFRESH_CALCULATOR
  })
}

export const doCalculate = () => {
  return ({
    type: DO_CALCULATE
  })
}

export const fireAction = (type, prevActionType, value, formula, keyCode) => dispatch => {
  let actionType = type || '';
  let actionValue = value || '';
  
  if (keyCode) {
    const data = getKeyCodeData(keyCode);
    actionType = data.type;
    actionValue = data.value;
  }

  if (!actionType || !actionValue) {
    return false;
  }

  if (actionType === OPERATION && actionType === prevActionType) {
    return false;
  }

  if (actionType === NUMBER || actionType === OPERATION) {
    return dispatch(updateFormula(actionValue, actionType));
  }

  if (actionType === CLEAR) {
    return dispatch(refreshCalculator());
  }

  if (actionType === EQUAL && formula) {
    return dispatch(doCalculate());
  }
}
