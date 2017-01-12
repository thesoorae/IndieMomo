class OrderOption < ActiveRecord::Base
validates :cost, :qty, :batch_id, presence:true
validates :qty, numericality: {only_integer: true}
validates :cost, numericality: {only_float: true}

belongs_to :batch

end
