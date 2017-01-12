
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

export const updateBatch = batch => (
  $.ajax({
    method:'PATCH',
    url:`api/batches/${batch.id}`,

    data: {batch}
  })
);

export const deleteBatch = id => (
  $.ajax({
    method:'DELETE',
    url: `api/batches/${id}`

  })
);
