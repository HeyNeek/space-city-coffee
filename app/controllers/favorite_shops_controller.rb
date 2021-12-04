class FavoriteShopsController < ApplicationController
    def create
        favorite = Favorite.create(user_id: params[:user_id], shop_id: params[:shop_id])
        render json: favorite 
    end

    
end
