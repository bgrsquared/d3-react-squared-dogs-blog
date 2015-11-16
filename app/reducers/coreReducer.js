import {
  SET_RAW,
  SET_FILTER,
} from '../constants/ActionTypes';

import filterData from './helpers/filterData';

const initialState = {
  raw: [],
  filtered: [],
  nameLengthMax: Infinity,
  nameLengthMin: 0,
  sex: new Set(['m', 'w']),
};

export default function dogsReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case SET_RAW:
      newState = Object.assign({}, state, {raw: action.raw, filtered: action.raw});
      return newState;
    case SET_FILTER:
      newState = Object.assign({}, state, action.filterAction);
      newState.filtered = filterData(newState);
      return newState;
    default:
      return state;
  }
}
