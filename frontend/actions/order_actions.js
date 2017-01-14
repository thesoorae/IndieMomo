import * as APIUtil from '../util/order_api_util';
import {hashHistory} from 'react-router';


export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const RECEIVE_ORDER_ERRORS = "RECEIVE_ORDER_ERRORS";



export const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
});



export const createOrder = order => dispatch => {
  return APIUtil.createOrder(order)
  .then(neworder => {
    dispatch(receiveOrder(neworder)),
    err => dispatch(receiveOrderErrors(err.responseJSON));
});};

export const removeOrder = order => ({
  type:REMOVE_ORDER,
  order
});

export const deleteOrder = id => dispatch => {
  return APIUtil.deleteOrder(id)
  .then( neworder => dispatch((removeOrder(neworder))));
};


export const receiveOrderErrors = errors => ({
  type: RECEIVE_ORDER_ERRORS,
  errors
});
