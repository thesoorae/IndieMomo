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
  CATEGORIES = ["Taiwanese", "Chinese", "Filipino", "Thai", "Vietnamese", "Cambodian", "Cantonese"]

  validates :title, :goal, :chef_id, presence:true
  validates :category, inclusion:{ in: CATEGORIES }
  validates :zip_code, numericality: {only_integer: true}

  belongs_to :chef,
  foreign_key: :chef_id,
  class_name: :User




end
