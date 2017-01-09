### Sample State

state = {
  currentUser: {:id, :username},
  relevantBatches: {
    1: {:id, :title, :category, :description, images:[{:id, :url}...], :goal, :address, orders:[{:id, :userId, :order_qty}], chef:{:id, :username, :image, :description, :video, :certifications }, ...}
    ...}

  currentBatch: {:id, :title, :category, :description, images:[{:id, :url}...], :goal, :address}

  forms: {
    signup: {errors:[]},
    login: {errors :[]}
  }
}
