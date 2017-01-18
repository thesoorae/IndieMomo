import {RECEIVE_BATCHES, RECEIVE_BATCH, REMOVE_BATCH} from '../actions/batch_actions';
import merge from 'lodash/merge';

const BatchesReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_BATCHES:
      return action.batches;
    case RECEIVE_BATCH:
      const newBatch = {[action.batch.id]: action.batch};
      return merge({}, state, newBatch);
    case REMOVE_BATCH:
      delete newState[action.batch.id];
      return newState;
    default:
      return state;
  }
};

export default BatchesReducer;
