class ShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_number, :address, :location_link
end
