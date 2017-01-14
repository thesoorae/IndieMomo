


export const createOrder = order => (
  $.ajax({
    method:'POST',
    url:'api/orders',
    data: {order}

  })
);


export const deleteOrder = id => (
  $.ajax({
    method:'DELETE',
    url: `api/orders/${id}`

  })
);
