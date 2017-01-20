class Review < ActiveRecord::Base
  validates :rating, :user_id, :batch_id, presence: true
  
end
