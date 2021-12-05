class FavoriteShopSerializer < ActiveModel::Serializer
  attributes :id, :shop_id, :user_id

  belongs_to :shop
end
