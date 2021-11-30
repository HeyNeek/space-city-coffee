class Shop < ApplicationRecord
    has_many :favorite_shops
    has_many :users, through: :favorite_shops
end
