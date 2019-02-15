import { combineReducers } from 'redux';
import appReducer, { initialState as appReducerInitialState } from './appReducer';
/*
import reducer1, { initialState as reducer1InitialState } from './reducer1';
import reducer2, { initialState as reducer2InitialState } from './reducer2';
*/

export const initialAppState = {
  appReducer: appReducerInitialState,
  /*
    reducer1: reducer1InitialState,
    reducer2: reducer2InitialState,
    ...,
  */
};

const rootReducer = combineReducers({
  appReducer,
  /*
    reducer1,
    reducer2,
    ...,
  */
});

export default rootReducer;
