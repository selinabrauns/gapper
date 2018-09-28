import { createActions } from 'redux-actions';

export const commonActions = createActions({
  TEST: data => data,
});


export const test = dispatch => data =>
  dispatch(commonActions.test(data))