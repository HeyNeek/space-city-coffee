class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :shop_id

  belongs_to :user
end
