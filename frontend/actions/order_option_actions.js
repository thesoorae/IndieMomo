import * as APIUtil from '../util/order_options_api_util';
import {hashHistory} from 'react-router';
import {RECEIVE_BATCH_ERRORS, receiveBatchErrors} from './batch_actions';

export const RECEIVE_OPTION = "RECEIVE_OPTION";
export const REMOVE_OPTION = "REMOVE_OPTION";






export const receiveOption = option => ({
  type: RECEIVE_OPTION,
  option
});



export const createOption = option => dispatch => {
  return APIUtil.createOption(option)
  .then(newoption => {
    dispatch(receiveOption(newoption));
    },
  err => dispatch(receiveBatchErrors(err.responseJSON)));
};

export const updateOption = option => dispatch => {
  return APIUtil.updateOption(option)

  .then(newoption => {
    dispatch(receiveOption(newoption));
  },
  err => dispatch(receiveBatchErrors(err.responseJSON)));
};

export const removeOption = option => ({
  type:REMOVE_OPTION,
  option
});

export const deleteOption = id => dispatch => {
  return APIUtil.deleteOption(id)
  .then( newoption => dispatch((removeOption(newoption))));
};
