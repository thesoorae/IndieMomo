import * as APIUtil from '../util/batch_api_util';
import {hashHistory} from 'react-router';


export const RECEIVE_BATCHES = "RECEIVE_BATCHES";
export const RECEIVE_BATCH = "RECEIVE_BATCH";
export const REMOVE_BATCH = "REMOVE_BATCH";
export const RECEIVE_BATCH_ERRORS = "RECEIVE_BATCH_ERRORS";



export const receiveBatches = batches => ({
  type: RECEIVE_BATCHES,
  batches
});

export const fetchBatches = () => dispatch => {
  return APIUtil.fetchBatches()
  .then(batches => dispatch(receiveBatches(batches)));
};


export const receiveBatch = batch => ({
  type: RECEIVE_BATCH,
  batch
});



export const fetchBatch = id => dispatch => {
  return APIUtil.fetchBatch(id)
  .then(batch => dispatch(receiveBatch(batch)));
};


export const createBatch = batch => dispatch => {
  return APIUtil.createBatch(batch)
  .then(newbatch => {
    dispatch(receiveBatch(newbatch));
    hashHistory.push(`/batches/${newbatch.id}/edit`);
  },
  err => dispatch(receiveBatchErrors(err.responseJSON)));

};

export const updateBatch = batch => dispatch => {
  return APIUtil.updateBatch(batch)

  .then(newbatch => {
    dispatch(receiveBatch(newbatch));
    hashHistory.replace(`/batches/${newbatch.id}`);
  },
  err => dispatch(receiveBatchErrors(err.responseJSON)));
};

export const removeBatch = batch => ({
  type:REMOVE_BATCH,
  batch
});

export const deleteBatch = id => dispatch => {
  return APIUtil.deleteBatch(id)
  .then( newbatch => dispatch((removeBatch(newbatch))));
};


export const receiveBatchErrors = errors => ({
  type: RECEIVE_BATCH_ERRORS,
  errors
});
