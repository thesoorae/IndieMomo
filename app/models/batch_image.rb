class BatchImage < ActiveRecord::Base
  validates :url, :batch_id, presence:true
  validates :url, uniqueness: true
  belongs_to :batch
end
