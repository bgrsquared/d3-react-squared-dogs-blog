import * as types from '../constants/ActionTypes';

export function setFilter(filterAction) {
  // action: add, remove, overwrite?
  return {
    type: types.SET_FILTER,
    filterAction,
  };
}
