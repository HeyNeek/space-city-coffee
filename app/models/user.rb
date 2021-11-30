class User < ApplicationRecord
    has_secure_password

    has_many :favorite_shops
    has_many :shops, through: :favorite_shops

    validates :name, presence: true, uniqueness: true
end
