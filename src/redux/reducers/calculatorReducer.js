import { UPDATE_FORMULA, REFRESH_CALCULATOR, DO_CALCULATE } from '../type';

const initialState = {
  formula: '',
  prevActionType: ''
};

export default function (state = initialState, action) {
  switch(action.type) {
    case UPDATE_FORMULA:
      return {
        formula: state.formula + action.payload.value,
        prevActionType: action.payload.type
      }
    case REFRESH_CALCULATOR:
      return initialState;
    case DO_CALCULATE:
      const calcResult = eval(state.formula).toString();
      return {
        formula: calcResult,
        prevActionType: ''
      }
    default:
      return state;
  }
}