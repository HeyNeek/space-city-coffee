class FavoriteShopsController < ApplicationController
    def create
        favorite = FavoriteShop.create!(user_id: params[:user_id], shop_id: params[:shop_id])
        render json: favorite, status: :created
    end

    
end
