export const asArray  = batches => Object.keys(batches).map(key => batches[key]);

export const getBatch = (id, batches) => {
  const nullBatch = {
    order_options:[],
    chef: {username:""},
    batch_images: [{url:"http://res.cloudinary.com/indiemomo/image/upload/v1484272483/sample.jpg"}]};
  return batches[id] || nullBatch;};

  export const getUser = (id, users) => {
    const nullUser = {};
    return users[id] || nullUser;};
