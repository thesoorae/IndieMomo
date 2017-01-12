export const asArray  = batches => Object.keys(batches).map(key => batches[key]);
export const getBatch = (id, batches) => {
  const nullBatch = {order_options:[]};
  return batches[id] || nullBatch;};
