export const asArray  = batches => Object.keys(batches).map(key => batches[key]);

export const getBatch = (id, batches) => {
  const nullBatch = {
    order_options:[],
    batch_images:[{url:""}],
    chef: {username:""}};
  return batches[id] || nullBatch;};

  export const getUser = (id, users) => {
    const nullUser = {};
    return users[id] || nullUser;};
