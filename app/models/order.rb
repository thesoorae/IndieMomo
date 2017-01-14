class Order < ActiveRecord::Base
  belongs_to :order_option

  belongs_to :customer,
  class_name: :User

  def qty_orders
    self.order_option.qty
  end


end
