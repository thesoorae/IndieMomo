
import {
  RECEIVE_USER,
  RECEIVE_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _defaultState = {
  };

const UserReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, _defaultState,
        action.user
      );
    default:
      return state;
  }
};

export default UserReducer;
