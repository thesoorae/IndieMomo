# == Schema Information
#
# Table name: batches
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  category          :string
#  description       :text
#  goal              :integer          not null
#  zip_code          :integer          not null
#  order_description :text
#  chef_id           :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Batch < ActiveRecord::Base

  CATEGORIES = ["Taiwanese", "Chinese", "Filipino", "Thai", "Vietnamese", "Cambodian", "Cantonese", "Korean", "Uncategorized"]

  validates :title, :goal, :chef_id, presence:true
  validates :category, inclusion:{ in: CATEGORIES }
  validates :zip_code, numericality: {only_integer: true}


  belongs_to :chef,
  foreign_key: :chef_id,
  class_name: :User

  has_many :order_options
  has_many :batch_images

  has_many :orders,
  through: :order_options

  def total_orders
    @total_orders = 0
    self.orders.each do |order|
      @total_orders += order.qty_orders
    end
    @total_orders
  end



end
