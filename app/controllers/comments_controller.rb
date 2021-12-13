class CommentsController < ApplicationController
    skip_before_action :authorize

    def index
        comments = Comment.all
        render json: comments
    end

    def create
        comment = Comment.create(body: params[:body], user_id: params[:user_id], shop_id: params[:shop_id])
        render json: comment, status: :created
    end

end
