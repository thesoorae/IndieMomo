
import {
  RECEIVE_USER,
  RECEIVE_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _defaultState = {
  displayedUser: null
};

const UserReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      const displayedUser = action.user;
      return merge({}, _defaultState, {
        displayedUser
      });
    default:
      return state;
  }
};

export default UserReducer;
