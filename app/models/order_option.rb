class OrderOption < ActiveRecord::Base
validates :batch_id, presence:true


belongs_to :batch

end
