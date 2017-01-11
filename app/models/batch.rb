# == Schema Information
#
# Table name: batches
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  category_id       :integer
#  description       :text
#  goal              :integer          not null
#  zip_code          :integer          not null
#  order_description :text
#  chef_id           :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Batch < ActiveRecord::Base
  validates :title, :category_id, presence:true 
end
