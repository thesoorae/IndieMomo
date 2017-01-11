import * as APIUtil from '../util/batch_api_util';
export const RECEIVE_BATCHES = "RECEIVE_BATCHES";
export const RECEIVE_BATCH = "RECEIVE_BATCH";
export const REMOVE_BATCH = "REMOVE_BATCH";

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
  .then(newbatch => dispatch(receiveBatch(newbatch)));
};

export const updateBatch = batch => dispatch => {
  return APIUtil.updateBatch(batch)
  .then(newbatch => dispatch(receiveBatch(batch)));
};

export const removeBatch = batch => ({
  type:REMOVE_BATCH,
  batch
});

export const deleteBatch = id => dispatch => {
  return APIUtil.deleteBatch(id)
  .then( newbatch => dispatch((removeBatch(newbatch))));
};
