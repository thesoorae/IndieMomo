import {RECEIVE_OPTION, REMOVE_OPTION} from '../actions/order_option_actions';
import merge from 'lodash/merge';

const OptionsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){

    case RECEIVE_OPTION:
      const newOption = {[action.option.id]: action.option};
      return merge({}, state, newOption);
    case REMOVE_OPTION:
      delete newState[action.option.id];
      return newState;
    default:
      return state;
  }
};

export default OptionsReducer;
