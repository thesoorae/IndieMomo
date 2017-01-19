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
  console.log("in action creator", option);
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

export const deleteOption = option => dispatch => {
  return APIUtil.deleteOption(option)
  .then( newoption => dispatch((removeOption(newoption))));
};
