
export const fetchBatches = () => (
    $.ajax({
      method: 'GET',
      url: 'api/batches'

    })
);

export const fetchBatch = id => (
  $.ajax({
    method:'GET',
    url:`api/batches/${id}`

  })
);

export const createBatch = batch => (
  $.ajax({
    method:'POST',
    url:'api/batches',
    data: {batch}

  })
);

export const updateBatch = data => (
  $.ajax({
    method:'PATCH',
    url:`api/batches/${data.batch.id}`,
    thing: console.log("data", data),
    data: {
      batch: data.batch,
      images: data.images}
  })
);

export const deleteBatch = id => (
  $.ajax({
    method:'DELETE',
    url: `api/batches/${id}`

  })
);
