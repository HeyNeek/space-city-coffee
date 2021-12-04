class UserDetailSerializer < UserSerializer
  has_many :shops, through: :favorite_shops
end
