class BatchImage < ActiveRecord::Base
  validates :url, :batch_id, presence:true
  belongs_to :batch 
end
