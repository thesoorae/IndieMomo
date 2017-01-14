import { RECEIVE_BATCH_ERRORS } from '../actions/batch_actions';
import { RECEIVE_ORDER_ERRORS } from '../actions/order_actions';
import merge from 'lodash/merge';

const _defaultState = {
  batch: []
};

const ErrorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BATCH_ERRORS:
      const errors = action.errors;
      return merge({}, _defaultState, {
        batch: errors
      });
      case RECEIVE_ORDER_ERRORS:
        const order_errors = action.errors;
        return merge({}, _defaultState, {
          orders: order_errors
        });
    default:
      return state;
  }
};

export default ErrorsReducer;
