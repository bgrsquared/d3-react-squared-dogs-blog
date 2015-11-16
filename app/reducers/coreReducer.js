import {
  SET_RAW,
  SET_FILTER,
} from '../constants/ActionTypes';

const initialState = {
  raw: [],
  filtered: [],
};

export default function dogsReducer(state = initialState, action) {
  let newState = {};
  switch (action.type) {
    case SET_RAW:
      newState = Object.assign({}, state, {raw: action.raw, filtered: action.raw});
      return newState;
    case SET_FILTER:
      return state;
    default:
      return state;
  }
}
