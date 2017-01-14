import {RECEIVE_ORDER, REMOVE_ORDER} from '../actions/order_actions';
import merge from 'lodash/merge';

const OrdersReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_ORDER:
      const newOrder = {[action.order.id]: action.order};
      return merge({}, state, newOrder);
    case REMOVE_ORDER:
      delete newState[action.order.id];
      return newState;
    default:
      return state;
  }
};

export default OrdersReducer;
