
export const fetchOptions = (batch_id) => (
    $.ajax({
      method: 'GET',
      url: `api/batches/${batch_id}/options`

    })
);

export const createOption= option => (
  $.ajax({
    method:'POST',
    thing: console.log("in api call", option),
    url:`api/batches/${option.batch_id}/order_options`,
    data: {order_option: option}

  })
);

export const updateOption= option => (
  $.ajax({
    method:'PATCH',
    url:`api/batches/${option.batch_id}/order_options/${option.id}`,
    data: {order_option: option}
  })
);

export const deleteOption= option => (
  $.ajax({
    method:'DELETE',
    url: `api/batches/${option.batch_id}/order_options/${option.id}`

  })
);
