import * as APIUtil from '../util/user_api_util';
import { receiveErrors } from './session_actions';
import {hashHistory} from 'react-router';


export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";



export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});


export const fetchUsers = () => dispatch => {
  return APIUtil.fetchUsers()
  .then(users => dispatch(receiveUsers(users)));
};


export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const getUser = id => dispatch => {
  return APIUtil.fetchUser(id)
    .then(user => {
      dispatch(receiveUser(user));
      },
      err => dispatch(receiveErrors(err.responseJSON)));
};

export const editUser = user => dispatch => (
  APIUtil.updateUser(user)
    .then(updatedUser => dispatch(receiveUser(updatedUser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
