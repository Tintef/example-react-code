import { fromJS } from 'immutable';
import * as constants from '../actions/constants';

export const initialState = fromJS({
  user: {},
  loading: false,
});

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SET_USER:
      return state
        .set('user', action.user);
    case constants.UPDATE_USER:
      return state
        .set('user', { ...state.toJS().user, ...action.newData });
    case constants.SET_LOADING:
      return state
        .set('loading', action.value);
    default:
      return state;
  }
}
