class FavoriteShopSerializer < ActiveModel::Serializer
  attributes :id, :shop_id, :user_id
end
