class FavoriteShopsController < ApplicationController
    def index
        favorites = FavoriteShop.all
        render json: favorites
    end

    def create
        favorite = FavoriteShop.create!(user_id: params[:user_id], shop_id: params[:shop_id])
        render json: favorite, status: :created
    end

    def destroy
        favorite = FavoriteShop.find(params[:id])
        favorite.destroy
    end
    
end
