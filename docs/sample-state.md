# Sample State


state = {
  currentUser: {:id, :username},
  relevantBatches: {
    1: {:id, :title, :category, :description, :order_description, images:[{:id, :url}...], :goal, :zip_code, orders:[{:id, :userId, :order_qty}], chef:{:id, :username, :image, :description, :video, :certifications }, ...}
    ...}

  currentBatch: {:id, :title, :category, :description, images:[{:id, :url}...], :goal, :zip_code}

  forms: {
    signup: {errors:[]},
    login: {errors :[]}
  }
}
