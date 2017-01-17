# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  zip_code        :integer
#  img_url         :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string
#  last_name       :string
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: :true

  after_initialize :ensure_session_token

  has_many :batches,
  foreign_key: :chef_id

  has_many :orders,
  foreign_key: :customer_id

  has_many :order_options,
  through: :orders

  def password= password
  	self.password_digest = BCrypt::Password.create(password)
  	@password = password
  end

  def self.find_by_credentials username, password
  	user = User.find_by(username: username)
  	return nil unless user
  	user.password_is?(password) ? user : nil
  end

  def password_is? password
  	BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
  	self.session_token = generate_session_token
  	self.save
  	self.session_token
  end

  private

  def ensure_session_token
  	self.session_token ||= generate_session_token
  end

  def generate_session_token
  	SecureRandom.urlsafe_base64
  end


end
